export type Feature = { slug: string; name: string; tag: string; blurb: string; shot?: string; alt?: string; points: string[]; detail: string };
export const features: Feature[] = [
  { slug: 'terminal', name: 'Terminal', tag: 'A GPU-rendered terminal with real shells.', blurb: 'Multi-tab, split panes, and a native PTY backend. The renderer uses WebGL, and background tabs keep streaming.', shot: 'terminal', alt: 'Myko terminal with multiple tabs',
    detail: 'Myko runs your shell through a native PTY (portable-pty), so zsh, bash, fish, pwsh and cmd behave the way they do anywhere else. Commands can be edited in a block-based input, and output stays readable while other tabs keep running.',
    points: ['xterm.js with the WebGL renderer', 'Multi-tab with background streaming', 'Horizontal and vertical split panels', 'Inline search, link detection, true color', 'Shells: zsh, bash, pwsh, fish, cmd', 'Windows: per-tab Local or WSL distro environments', 'Process management and terminal serialization'] },
  { slug: 'editor', name: 'Editor', tag: 'A CodeMirror 6 editor that sits next to your terminal.', blurb: 'Edit without leaving the workspace. Inline AI autocomplete, Vim mode, and ten editor themes.', shot: 'editor', alt: 'Myko code editor with tabs and a theme',
    detail: 'The editor covers the popular languages (TypeScript, JavaScript, Rust, Python, Go, C/C++, Java, HTML/CSS, JSON, Markdown and more). AI edits arrive as diffs you accept or reject hunk by hunk. The editor theme is independent of the app theme.',
    points: ['CodeMirror 6 with broad language support', 'Inline AI autocomplete, local models supported', 'Accept or reject AI edits hunk by hunk', 'Vim mode', 'Diagnostics through language servers', 'Atom One, Aura, Copilot, GitHub Dark/Light, Gruvbox Dark, Nord, Tokyo Night, Xcode Dark/Light', 'File explorer with fuzzy search and inline rename'] },
  { slug: 'ai', name: 'AI agents', tag: 'An agent that plans, edits and runs commands, with you in control.', blurb: 'Bring your own keys or run local models. Agents plan, spawn sub-agents, edit files and ask before running shell commands.', shot: 'ai-workflow', alt: 'Myko AI agent workflow with edit diffs',
    detail: 'The AI panel is an agent, not a chat box. It has file tools (read, write, edit, multi-edit, grep, glob), terminal tools, and bash gated by approval. Project context lives in a MYKO.md file. Plan mode proposes a multi-step plan and waits for your confirmation before acting.',
    points: ['Providers: OpenAI, Anthropic, Google Gemini, Groq, xAI, Cerebras, OpenRouter, DeepSeek, Mistral, any OpenAI-compatible endpoint', 'Local: LM Studio, MLX, Ollama', 'Plans, sub-agents, and project memory via MYKO.md', 'Custom agents with their own system prompt and tool subset', 'Composer: #snippets, @files, slash commands, voice input', 'Attach files and editor selections from the explorer', 'Todo tracking, streaming responses and visible reasoning', 'Attach editor and terminal selections', 'Fix terminal errors: explain, find the cause, fix, or plan'] },
  { slug: 'source-control', name: 'Source control', tag: 'Stage, commit, and read history without switching apps.', blurb: 'Hunk-level staging, push with upstream awareness, and a real commit graph.', shot: 'source-control', alt: 'Myko source control panel with git graph',
    detail: 'Stage and unstage individual hunks, commit with Cmd/Ctrl+Enter, and push. The history pane draws lanes for merges and branches, supports search and filtering, and links through to the commit on the remote.',
    points: ['Stage and unstage hunks', 'Commit and push with upstream awareness', 'Branch display including detached HEAD', 'Commit graph with merge and branch lanes', 'Commit search and filter'] },
  { slug: 'preview', name: 'Web preview', tag: 'See your dev server next to your code.', blurb: 'Myko finds local dev servers and opens them in a preview tab.', shot: 'web-preview', alt: 'Myko web preview of a local dev server',
    detail: 'Start a dev server in the terminal and Myko detects it. External URLs open in a native child webview, so previews are not limited to localhost.',
    points: ['Auto-detects local dev servers', 'Opens them in a preview tab', 'External URL preview in a native child webview'] },
  { slug: 'themes', name: 'Themes', tag: 'Make the workspace look the way you work.', blurb: 'Build custom themes in the app, import community themes, and set a background image.', shot: 'themes', alt: 'Myko with a custom theme and background image',
    detail: 'Switch between bundled presets and your own. Background images have adjustable opacity and blur, and the editor theme is chosen separately from the app theme.',
    points: ['Custom themes built in-app', 'Bundled presets', 'Import community themes', 'Background images with opacity and blur', 'Editor theme independent of app theme'] },
  { slug: 'ssh', name: 'SSH', tag: 'Remote servers, right next to your local shell.', blurb: 'Open an SSH terminal from the command palette. Your agent can use the same remote tools.', shot: 'ssh', alt: 'Myko Settings, SSH tab, listing servers imported from ~/.ssh/config',
    detail: 'Myko has an SSH terminal and AI remote tools. Servers come from your own ~/.ssh/config or are added in Settings. Myko never stores passwords or private keys: key files are referenced by path, and password and host-key prompts happen in the terminal, where you can see them.',
    points: ['SSH tab in Settings with an Add server button', 'Hosts read from ~/.ssh/config', 'Connect from the command palette with "SSH: …"', 'SSH terminal and AI remote tools', 'Key files referenced by path; passwords and private keys are never stored', 'Password and host-key prompts appear in the terminal'] },
];
export type Block = { h?: string; p?: string; code?: string; list?: string[] };
export type Doc = { slug: string; title: string; desc: string; group: string; blocks: Block[] };
export const docs: Doc[] = [
  { slug: 'getting-started', title: 'Getting started', group: 'Start', desc: 'Install Myko, add an AI key, and open a project.', blocks: [
    { p: 'Myko is a desktop workspace that puts a terminal, editor, source control, AI agent and web preview in one window.' },
    { h: 'Install', p: 'Download the installer for your platform from the download page, then run it.' },
    { h: 'Add an AI provider', list: ['Open Settings, then Models.', 'Pick a provider and paste your API key, or point Myko at a local LM Studio, MLX or Ollama endpoint.', 'Keys are stored in your OS keychain.'] },
    { h: 'Give the agent project context', p: 'Create a MYKO.md file in your project root. The agent reads it as project memory.', code: '# MYKO.md\nUse pnpm. Run tests with `pnpm test`.\nPrefer small, focused commits.' } ] },
  { slug: 'installation', title: 'Installation', group: 'Start', desc: 'Platform notes for Windows and Linux, and building from source.', blocks: [
    { h: 'Windows', p: 'Run the x64 setup installer. The build is unsigned, so Windows shows "Windows protected your PC" on first launch. Choose More info, then Run anyway. Default shell detection tries pwsh.exe, then powershell.exe, then cmd.exe. WSL distros are available as per-tab environments.' },
    { h: 'Linux', p: 'Packages are published as .deb, .rpm and AppImage. The AppImage needs FUSE; without it, extract and run:', code: './Myko_*.AppImage --appimage-extract-and-run' },
    { h: 'macOS', p: 'No macOS build has been published yet. You can build from source.' },
    { h: 'Build from source', p: 'You need Rust (stable), Node 20+, pnpm and the Tauri prerequisites for your platform.', code: 'pnpm install\npnpm tauri dev      # development\npnpm tauri build    # production bundle' } ] },
  { slug: 'configuration', title: 'Configuration', group: 'Start', desc: 'Providers, local models, and project memory.', blocks: [
    { h: 'Settings', p: 'Settings has eight tabs: General, Editor, Themes, Shortcuts, Models, Agents, SSH and About.' },
    { h: 'Providers', p: 'OpenAI, Anthropic, Google (Gemini), Groq, xAI (Grok), Cerebras, OpenRouter, DeepSeek, Mistral, and any OpenAI-compatible endpoint.' },
    { h: 'Local models', p: 'Point Myko at an LM Studio, MLX or Ollama endpoint in Settings, then Models.' },
    { h: 'Project memory', p: 'MYKO.md in your project root holds instructions the agent should follow in that project.' } ] },
  { slug: 'ai', title: 'AI agents', group: 'Features', desc: 'Agents, plan mode, sub-agents, and the Composer.', blocks: [
    { p: 'The AI panel runs an agent with tools. It can read, write, edit and multi-edit files, search with grep and glob, and run shell commands behind an approval step.' },
    { h: 'Plan mode', p: 'For multi-step work, the agent generates a plan and asks you to confirm before it acts.' },
    { h: 'Composer', list: ['#handle inserts a snippet', '@path attaches a file', 'Slash commands', 'Voice input', 'Attach files or selections from the explorer or editor'] },
    { h: 'Custom agents', p: 'Define agents with their own system prompt and a subset of tools.' },
    { h: 'AI edits', p: 'Edits show as diffs in the editor. Accept or reject each hunk.' } ] },
  { slug: 'terminal', title: 'Terminal', group: 'Features', desc: 'Tabs, splits, shells and search.', blocks: [
    { p: 'The terminal uses xterm.js with a WebGL renderer on top of a native PTY.' },
    { list: ['Multi-tab with background streaming', 'Horizontal and vertical splits', 'Inline search and link detection', 'zsh, bash, pwsh, fish, cmd', 'On Windows, choose Local or a WSL distro per tab'] } ] },
  { slug: 'editor', title: 'Editor', group: 'Features', desc: 'CodeMirror 6, Vim mode and themes.', blocks: [
    { p: 'Edit files in tabs with syntax support for the popular languages, inline AI autocomplete, and optional Vim mode. There are ten built-in editor themes, chosen independently of the app theme.' },
    { h: 'File explorer', p: 'Fuzzy search, keyboard navigation, inline rename, and context actions. Files can be attached to the AI panel.' } ] },
  { slug: 'git', title: 'Source control', group: 'Features', desc: 'Hunk staging, commits and the commit graph.', blocks: [
    { list: ['Stage and unstage hunks', 'Commit with Cmd+Enter or Ctrl+Enter', 'Push with upstream awareness', 'History pane with a commit graph', 'Search commits and open them on the remote'] } ] },
  { slug: 'preview', title: 'Web preview', group: 'Features', desc: 'Preview local and external pages.', blocks: [
    { p: 'Myko auto-detects local dev servers and opens them in a preview tab. External URLs open in a native child webview.' } ] },
  { slug: 'themes', title: 'Themes', group: 'Features', desc: 'Custom themes and background images.', blocks: [
    { p: 'Create themes in the app, switch between presets, or import themes from the community. Add a background image and tune its opacity and blur.' } ] },
  { slug: 'ssh', title: 'SSH', group: 'Features', desc: 'Connect to remote servers from the terminal.', blocks: [
    { p: 'Myko includes an SSH terminal and remote tools for the AI agent. Open Settings, then SSH to see your servers.' },
    { h: 'Add or import servers', list: ['Add server creates an entry in Settings.', 'Hosts from ~/.ssh/config are listed automatically.', 'Connect from the command palette with "SSH: …".'] },
    { h: 'Credentials', p: 'Myko never stores passwords or private keys. Key files are referenced by path, and password and host-key prompts happen in the terminal.' } ] },
  { slug: 'security', title: 'Security model', group: 'Reference', desc: 'How Myko guards files, shells, secrets and the network.', blocks: [
    { p: 'Myko runs shells, reads and writes files, and sends data to AI providers, so each boundary validates input.' },
    { h: 'Boundaries', list: ['IPC commands gated by Tauri capabilities', 'AI file tools pass a secret-path deny-list on read and write', 'Terminal and git work only in authorized workspace folders', 'AI network requests go through a native proxy with SSRF and DNS-rebinding defenses', 'API keys live in the OS keychain', 'Terminal escape sequences are parsed but not blindly trusted'] },
    { h: 'Blocked paths', p: 'The AI tools refuse files such as .env*, private keys, and credential stores, and directories such as ~/.ssh, ~/.aws and ~/.gnupg.' } ] },
  { slug: 'troubleshooting', title: 'Troubleshooting', group: 'Reference', desc: 'Common launch and rendering problems.', blocks: [
    { h: 'Windows blocks the installer', p: 'The build is unsigned. Choose More info, then Run anyway.' },
    { h: 'AppImage does not start', p: 'It needs FUSE. Run it without FUSE:', code: './Myko_*.AppImage --appimage-extract-and-run' },
    { h: 'Rendering glitches on Wayland', code: 'WEBKIT_DISABLE_DMABUF_RENDERER=1 ./Myko_*.AppImage', p: 'If that does not help, install the .deb or .rpm, which link against the system GTK stack.' },
    { h: 'Report a bug', p: 'Open an issue on GitHub.' } ] },
];
export const faq = [
  ['What is Myko?', 'A desktop workspace with a terminal, code editor, source control, AI agent and web preview in one app. It is built on Tauri 2, Rust and React.'],
  ['Does Myko require an account?', 'No. There is no account.'],
  ['Which AI providers are supported?', 'OpenAI, Anthropic, Google Gemini, Groq, xAI, Cerebras, OpenRouter, DeepSeek, Mistral, and any OpenAI-compatible endpoint.'],
  ['Can I use local AI?', 'Yes. Myko works with LM Studio, MLX and Ollama.'],
  ['Does Myko work offline?', 'The terminal, editor, explorer and source control run locally. AI works offline only with a local model; cloud providers need a connection.'],
  ['Which operating systems are supported?', 'Windows and Linux builds are published. There is no macOS build yet; the project targets macOS, Linux and Windows and can be built from source.'],
  ['Where are API keys stored?', 'In your operating system keychain. They are not written to disk or localStorage.'],
  ['Does Myko collect telemetry?', 'The README states no telemetry, and we found no analytics or telemetry code in the app source when we checked.'],
  ['Where can I report bugs?', 'On the GitHub issues page.'],
];
