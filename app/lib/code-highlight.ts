type TokenRule = {
  regex: RegExp;
  className: string;
};

const jsTsRules: TokenRule[] = [
  { regex: /\/\/[^\n]*/y, className: "comment" },
  { regex: /\/\*[\s\S]*?\*\//y, className: "comment" },
  { regex: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/y, className: "string" },
  { regex: /<\/?[A-Za-z][A-Za-z0-9.-]*/y, className: "tag" },
  { regex: /\b[A-Za-z_:][A-Za-z0-9_.:-]*(?==)/y, className: "property" },
  {
    regex:
      /\b(?:import|from|export|default|class|extends|implements|interface|type|const|let|var|function|return|if|else|switch|case|break|continue|for|while|do|try|catch|finally|throw|new|async|await|null|true|false|undefined|this|as|in|of)\b/y,
    className: "keyword",
  },
  {
    regex: /\b(?:string|number|boolean|unknown|never|void|any|object|Record|Array|Promise)\b/y,
    className: "type",
  },
  { regex: /\b-?(?:0|[1-9]\d*)(?:\.\d+)?\b/y, className: "number" },
  { regex: /\b[A-Za-z_$][\w$]*(?=\()/y, className: "function" },
  { regex: /[{}()[\].,;:+\-*/%=&|!<>?]+/y, className: "operator" },
];

const jsonRules: TokenRule[] = [
  { regex: /"(?:\\.|[^"\\])*"(?=\s*:)/y, className: "property" },
  { regex: /"(?:\\.|[^"\\])*"/y, className: "string" },
  { regex: /\b(?:true|false|null)\b/y, className: "keyword" },
  { regex: /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/y, className: "number" },
  { regex: /[{}\[\],:]/y, className: "operator" },
];

const pythonRules: TokenRule[] = [
  { regex: /#[^\n]*/y, className: "comment" },
  { regex: /'''[\s\S]*?'''|"""[\s\S]*?"""/y, className: "string" },
  { regex: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/y, className: "string" },
  {
    regex:
      /\b(?:def|class|return|if|elif|else|for|while|try|except|finally|import|from|as|with|lambda|pass|raise|yield|None|True|False|and|or|not|in|is)\b/y,
    className: "keyword",
  },
  { regex: /\b-?(?:0|[1-9]\d*)(?:\.\d+)?\b/y, className: "number" },
  { regex: /\b[A-Za-z_][A-Za-z0-9_]*(?=\()/y, className: "function" },
  { regex: /[{}()[\].,;:+\-*/%=&|!<>?]+/y, className: "operator" },
];

const bashRules: TokenRule[] = [
  { regex: /#[^\n]*/y, className: "comment" },
  { regex: /'(?:[^']*)'|"(?:\\.|[^"\\])*"/y, className: "string" },
  { regex: /\$\{?[A-Za-z_][A-Za-z0-9_]*\}?/y, className: "variable" },
  {
    regex: /\b(?:curl|export|echo|cat|grep|jq|sed|awk|if|then|fi|for|do|done|while|case|esac)\b/y,
    className: "keyword",
  },
  { regex: /-[-A-Za-z0-9_]+/y, className: "property" },
  { regex: /\b\d+\b/y, className: "number" },
  { regex: /[{}()[\].,;:+\-*/%=&|!<>?]+/y, className: "operator" },
];

const envRules: TokenRule[] = [
  { regex: /#[^\n]*/y, className: "comment" },
  { regex: /[A-Z_][A-Z0-9_]*(?==)/y, className: "property" },
  { regex: /'(?:[^']*)'|"(?:\\.|[^"\\])*"/y, className: "string" },
  { regex: /\$\{?[A-Za-z_][A-Za-z0-9_]*\}?/y, className: "variable" },
  { regex: /[=]/y, className: "operator" },
];

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function highlightWithRules(code: string, rules: TokenRule[]): string {
  let index = 0;
  let output = "";

  while (index < code.length) {
    let matched = false;

    for (const rule of rules) {
      rule.regex.lastIndex = index;
      const match = rule.regex.exec(code);
      if (!match || match.index !== index) continue;

      const token = escapeHtml(match[0]);
      output += `<span class="docs-token ${rule.className}">${token}</span>`;
      index += match[0].length;
      matched = true;
      break;
    }

    if (!matched) {
      output += escapeHtml(code[index]);
      index += 1;
    }
  }

  return output;
}

function getRules(language: string): TokenRule[] | null {
  switch (language.toLowerCase()) {
    case "tsx":
    case "ts":
    case "js":
    case "javascript":
    case "typescript":
      return jsTsRules;
    case "json":
      return jsonRules;
    case "py":
    case "python":
      return pythonRules;
    case "bash":
    case "sh":
    case "shell":
      return bashRules;
    case "env":
      return envRules;
    default:
      return null;
  }
}

export function highlightSnippet(code: string, language: string): string {
  const rules = getRules(language.trim());
  if (!rules) return escapeHtml(code);
  return highlightWithRules(code, rules);
}
