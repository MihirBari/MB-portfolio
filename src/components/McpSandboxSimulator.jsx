import React, { useState } from "react";

const PROFILES = [
  {
    id: "admin",
    name: "Admin User",
    role: "admin",
    badge: "🛡️ Administrator",
    assigned_tools: ["solarwinds", "bigfix", "silverfort"],
    description: "Full root authority across all enterprise tools and sandbox engines.",
  },
  {
    id: "op-sw",
    name: "Mihir (NOC Operator)",
    role: "operator",
    badge: "⚡ SolarWinds Operator",
    assigned_tools: ["solarwinds"],
    description: "Restricted by profile auth strictly to SolarWinds SWQL inspection.",
  },
  {
    id: "op-bf",
    name: "Endpoint Sec Engineer",
    role: "operator",
    badge: "🔧 BigFix Operator",
    assigned_tools: ["bigfix"],
    description: "Restricted by profile auth strictly to HCL BigFix Session Relevance.",
  },
  {
    id: "viewer",
    name: "External Auditor",
    role: "viewer",
    badge: "👁️ Audit Viewer",
    assigned_tools: [],
    description: "Read-only access; sandbox query execution is completely blocked.",
  },
];

const TEMPLATES = {
  solarwinds: [
    {
      label: "Node Health & Status",
      query:
        "SELECT TOP 10 NodeID, Caption, IPAddress, Status, StatusDescription, Vendor\nFROM Orion.Nodes\nORDER BY Caption",
    },
    {
      label: "Active Critical Alerts",
      query:
        "SELECT TOP 5 AlertActiveID, AlertMessage, TriggerTimeStamp\nFROM Orion.AlertActive\nORDER BY TriggerTimeStamp DESC",
    },
    {
      label: "High CPU Nodes (>75%)",
      query:
        "SELECT TOP 5 NodeID, Caption, CPULoad, PercentMemoryUsed\nFROM Orion.Nodes\nWHERE CPULoad > 75\nORDER BY CPULoad DESC",
    },
  ],
  bigfix: [
    {
      label: "BES Computers & OS",
      query: "(id of it, name of it, operating system of it) of bes computers",
    },
    {
      label: "Fixlet Patch Compliance",
      query: "(name of it, number of applicable fixlets of it) of bes computers",
    },
    {
      label: "Unique OS Distributions",
      query: "unique values of operating systems of bes computers",
    },
  ],
};

const SAMPLE_RESULTS = {
  solarwinds: {
    columns: ["NodeID", "Caption", "IPAddress", "Status", "StatusDescription", "Vendor"],
    rows: [
      { NodeID: 101, Caption: "core-router-01.corp", IPAddress: "10.0.1.1", Status: 1, StatusDescription: "Up", Vendor: "Cisco" },
      { NodeID: 104, Caption: "app-server-east.prod", IPAddress: "10.0.4.15", Status: 1, StatusDescription: "Up", Vendor: "Ubuntu Linux" },
      { NodeID: 108, Caption: "db-cluster-primary", IPAddress: "10.0.2.88", Status: 2, StatusDescription: "Warning - High IOPS", Vendor: "Red Hat Enterprise" },
      { NodeID: 112, Caption: "vpn-gateway-apac", IPAddress: "192.168.10.1", Status: 1, StatusDescription: "Up", Vendor: "Palo Alto Networks" },
    ],
  },
  bigfix: {
    columns: ["Computer ID", "Host Name", "Operating System"],
    rows: [
      { "Computer ID": 154201, "Host Name": "WKS-DEV-902", "Operating System": "Win11 23H2 (x64)" },
      { "Computer ID": 154209, "Host Name": "SRV-ORION-01", "Operating System": "Windows Server 2022" },
      { "Computer ID": 154215, "Host Name": "BIGFIX-RELAY-02", "Operating System": "RHEL 9.2 (Santiago)" },
    ],
  },
};

const McpSandboxSimulator = () => {
  const [selectedProfile, setSelectedProfile] = useState(PROFILES[1]); // Default to SolarWinds Operator to highlight RBAC!
  const [engine, setEngine] = useState("solarwinds");
  const [query, setQuery] = useState(TEMPLATES.solarwinds[0].query);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // 'table' | 'json'
  const [copied, setCopied] = useState(false);

  const hasWildcardWarning =
    engine === "solarwinds" && query.toUpperCase().includes("SELECT *");

  const handleEngineChange = (newEngine) => {
    setEngine(newEngine);
    setQuery(TEMPLATES[newEngine][0].query);
    setResult(null);
  };

  const handleExecute = () => {
    setIsRunning(true);
    setResult(null);

    setTimeout(() => {
      setIsRunning(false);
      const role = selectedProfile.role;
      const assigned = selectedProfile.assigned_tools;

      if (role === "viewer") {
        setResult({
          status: 403,
          success: false,
          error: "Access denied. Viewers have read-only audit permissions and cannot execute queries in the Sandbox.",
          latency: "4ms",
          records: 0,
        });
        return;
      }

      if (role === "operator" && !assigned.includes(engine)) {
        setResult({
          status: 403,
          success: false,
          error: `Access denied. Profile '${selectedProfile.name}' is only authorized for assigned tool(s): [${assigned.join(", ").toUpperCase() || "None"}]. The ${engine === "solarwinds" ? "SolarWinds" : "BigFix"} tool is not assigned to your account.`,
          latency: "8ms",
          records: 0,
        });
        return;
      }

      // Success
      const sample = SAMPLE_RESULTS[engine];
      setResult({
        status: 200,
        success: true,
        latency: engine === "solarwinds" ? "24ms" : "32ms",
        records: sample.rows.length,
        columns: sample.columns,
        rows: sample.rows,
      });
    }, 400);
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='mb-8 rounded-3xl bg-[#0b081e] border border-cyan-500/30 p-5 sm:p-7 shadow-[0_0_35px_rgba(0,240,255,0.15)] relative overflow-hidden'>
      {/* Background ambient corner glow */}
      <div className='absolute -top-20 -right-20 w-48 h-48 bg-[#00f0ff]/15 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute -bottom-20 -left-20 w-48 h-48 bg-[#915EFF]/15 rounded-full blur-3xl pointer-events-none' />

      {/* Feature Header */}
      <div className='flex flex-wrap items-center justify-between gap-3 mb-5'>
        <div>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-semibold text-[#00f0ff] mb-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)]'>
            <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-ping' />
            <span>Live Feature Interactive Demo</span>
          </div>
          <h4 className='text-xl sm:text-2xl font-bold text-white tracking-tight'>
            ⚡ Query Sandbox & Tool-Level Profile Auth (RBAC)
          </h4>
          <p className='text-secondary text-xs sm:text-sm mt-0.5'>
            Test the live dual-engine Sandbox query box with role-based profile security directly below.
          </p>
        </div>

        <div className='flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded-xl'>
          <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
          <span>MCP Transport Ready</span>
        </div>
      </div>

      {/* Step 1: Profile Authentication Switcher */}
      <div className='mb-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]'>
        <div className='flex flex-wrap items-center justify-between gap-2 mb-3'>
          <div className='flex items-center gap-2'>
            <span className='w-5 h-5 rounded-full bg-[#915EFF]/30 border border-[#915EFF] text-white flex items-center justify-center text-xs font-bold'>
              1
            </span>
            <span className='text-white font-semibold text-xs sm:text-sm'>
              Select User Profile (Role & Tool Permissions):
            </span>
          </div>
          <span className='text-[11px] font-mono text-secondary'>
            Enforces granular <code className='text-[#00f0ff]'>assigned_tools</code> authorization
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5'>
          {PROFILES.map((profile) => {
            const isSelected = selectedProfile.id === profile.id;
            return (
              <button
                key={profile.id}
                onClick={() => {
                  setSelectedProfile(profile);
                  setResult(null);
                }}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? "bg-[#915EFF]/20 border-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.3)] ring-1 ring-[#915EFF]"
                    : "bg-black/40 border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <div className='flex items-center justify-between'>
                  <span className='text-xs font-bold text-white'>
                    {profile.badge}
                  </span>
                  {isSelected && (
                    <span className='text-[10px] font-semibold text-[#00f0ff] bg-cyan-950/60 px-1.5 py-0.5 rounded'>
                      Active
                    </span>
                  )}
                </div>
                <p className='text-[11px] text-secondary mt-1 line-clamp-2 leading-tight'>
                  {profile.description}
                </p>
                <div className='mt-2 text-[10px] font-mono text-purple-300 flex items-center gap-1'>
                  <span className='text-white/50'>Tools:</span>
                  <span className='text-[#00f0ff] font-semibold'>
                    [{profile.assigned_tools.join(", ") || "None"}]
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Auth Token Preview Bar */}
        <div className='mt-3 px-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] font-mono'>
          <div className='flex items-center gap-2 text-slate-300'>
            <span className='text-secondary'>Active Security Principal:</span>
            <span className='text-white font-semibold'>{selectedProfile.name}</span>
            <span className='text-secondary'>•</span>
            <span className='text-purple-300'>role: "{selectedProfile.role}"</span>
          </div>
          <div className='flex items-center gap-1.5 text-[#00f0ff]'>
            <span>JWT Claim:</span>
            <span>assigned_tools: [{selectedProfile.assigned_tools.join(", ") || "None"}]</span>
          </div>
        </div>
      </div>

      {/* Step 2: Sandbox Query Box & Engine Selector */}
      <div className='p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]'>
        <div className='flex flex-wrap items-center justify-between gap-3 mb-3'>
          <div className='flex items-center gap-2'>
            <span className='w-5 h-5 rounded-full bg-[#00f0ff]/30 border border-[#00f0ff] text-white flex items-center justify-center text-xs font-bold'>
              2
            </span>
            <span className='text-white font-semibold text-xs sm:text-sm'>
              Sandbox Engine & Query Editor:
            </span>
          </div>

          {/* Engine Selector Pills */}
          <div className='flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10'>
            <button
              onClick={() => handleEngineChange("solarwinds")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                engine === "solarwinds"
                  ? "bg-[#00f0ff] text-black shadow-[0_0_12px_rgba(0,240,255,0.5)] font-bold"
                  : "text-secondary hover:text-white"
              }`}
            >
              <span>🌐</span>
              <span>SolarWinds SWQL</span>
            </button>
            <button
              onClick={() => handleEngineChange("bigfix")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                engine === "bigfix"
                  ? "bg-[#915EFF] text-white shadow-[0_0_12px_rgba(145,94,255,0.5)] font-bold"
                  : "text-secondary hover:text-white"
              }`}
            >
              <span>🔧</span>
              <span>BigFix Session Relevance</span>
            </button>
          </div>
        </div>

        {/* Quick Query Templates */}
        <div className='flex flex-wrap items-center gap-2 mb-3'>
          <span className='text-[11px] font-medium text-secondary'>Templates:</span>
          {TEMPLATES[engine].map((tmpl, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(tmpl.query);
                setResult(null);
              }}
              className='px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] hover:bg-white/10 border border-white/10 text-white-100 hover:text-[#00f0ff] transition-all'
            >
              {tmpl.label}
            </button>
          ))}
          <button
            onClick={handleCopyQuery}
            className='ml-auto text-[11px] font-mono text-secondary hover:text-white flex items-center gap-1'
            title='Copy Query'
          >
            <span>{copied ? "✔ Copied" : "📋 Copy"}</span>
          </button>
        </div>

        {/* Editable Query Box Textarea */}
        <div className='relative'>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            className='w-full p-3.5 rounded-xl bg-black/80 border border-white/15 focus:border-[#00f0ff] font-mono text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all resize-y'
            placeholder='Type or modify SWQL / Relevance query expression here...'
          />
        </div>

        {/* Diagnostic Syntax Warning */}
        {hasWildcardWarning && (
          <div className='mt-2 p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center gap-2 text-[11px] text-amber-300 font-mono'>
            <span>💡</span>
            <span>
              <strong>SWQL Diagnostic Hint:</strong> SWQL does not support 'SELECT *'. Specify explicit column names (e.g. 'SELECT TOP 10 NodeID, Caption FROM Orion.Nodes').
            </span>
          </div>
        )}

        {/* Execution Actions Bar */}
        <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-xs text-secondary font-mono'>
            <span>Target Platform:</span>
            <span className='text-white font-semibold'>
              {engine === "solarwinds" ? "Orion SWIS v3 (Port 17778)" : "BigFix REST API (Port 52311)"}
            </span>
          </div>

          <button
            onClick={handleExecute}
            disabled={isRunning}
            className='px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#00f0ff] via-[#4ceeff] to-[#00cea8] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all flex items-center gap-2 disabled:opacity-50 transform hover:-translate-y-0.5'
          >
            {isRunning ? (
              <>
                <span className='w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin' />
                <span>Validating RBAC & Executing...</span>
              </>
            ) : (
              <>
                <span>▶</span>
                <span>Run Query in Sandbox</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Step 3: Execution Telemetry & Output Result Window */}
      {result && (
        <div className='mt-5 p-4 rounded-2xl bg-black/80 border border-white/15 animate-fadeIn'>
          {/* Result Telemetry Header */}
          <div className='flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10'>
            <div className='flex items-center gap-2.5'>
              {result.success ? (
                <span className='px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-950/70 border border-emerald-500/50 text-emerald-400'>
                  HTTP 200 OK
                </span>
              ) : (
                <span className='px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-rose-950/70 border border-rose-500/50 text-rose-400'>
                  HTTP 403 FORBIDDEN
                </span>
              )}
              <span className='text-xs font-mono text-secondary'>
                Response Time: <span className='text-white font-semibold'>{result.latency}</span>
              </span>
              <span className='text-secondary'>•</span>
              <span className='text-xs font-mono text-secondary'>
                Records: <span className='text-white font-semibold'>{result.records}</span>
              </span>
            </div>

            {result.success && (
              <div className='flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono'>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-2.5 py-1 rounded ${
                    viewMode === "table" ? "bg-[#00f0ff] text-black font-bold" : "text-secondary hover:text-white"
                  }`}
                >
                  Table View
                </button>
                <button
                  onClick={() => setViewMode("json")}
                  className={`px-2.5 py-1 rounded ${
                    viewMode === "json" ? "bg-[#915EFF] text-white font-bold" : "text-secondary hover:text-white"
                  }`}
                >
                  JSON View
                </button>
              </div>
            )}
          </div>

          {/* Access Denied Output (Showcasing Role Permissions!) */}
          {!result.success ? (
            <div className='p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 text-rose-300 font-mono text-xs leading-relaxed'>
              <div className='flex items-center gap-2 text-rose-400 font-bold mb-1.5 text-sm'>
                <span>⛔</span>
                <span>Security Exception – Tool Authorization Denied</span>
              </div>
              <p>{result.error}</p>
              <div className='mt-2.5 pt-2.5 border-t border-rose-500/20 text-[11px] text-slate-300'>
                <span>Root Cause:</span> The active JWT token for role{" "}
                <code className='text-rose-400 font-bold'>"{selectedProfile.role}"</code> does not include the{" "}
                <code className='text-rose-400 font-bold'>"{engine}"</code> platform in its{" "}
                <code className='text-amber-300'>assigned_tools</code> permission claim.
              </div>
            </div>
          ) : (
            <>
              {/* Table Data View */}
              {viewMode === "table" && (
                <div className='overflow-x-auto rounded-xl border border-white/10'>
                  <table className='w-full text-left font-mono text-xs'>
                    <thead className='bg-white/[0.05] text-slate-300 border-b border-white/10'>
                      <tr>
                        {result.columns.map((col, idx) => (
                          <th key={idx} className='p-2.5 px-3 font-semibold text-[#00f0ff]'>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-white/[0.06] text-white-100'>
                      {result.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className='hover:bg-white/[0.03] transition-colors'>
                          {result.columns.map((col, colIdx) => (
                            <td key={colIdx} className='p-2.5 px-3 whitespace-nowrap'>
                              {String(row[col])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* JSON Data View */}
              {viewMode === "json" && (
                <pre className='p-3.5 rounded-xl bg-black/90 font-mono text-xs text-emerald-300 overflow-x-auto max-h-60 border border-white/10'>
                  {JSON.stringify(result.rows, null, 2)}
                </pre>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default McpSandboxSimulator;
