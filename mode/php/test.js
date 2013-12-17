(function() {
  var mode = CodeMirror.getMode({indentUnit: 2}, {name: "php", startOpen: true});
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT("if",
     "[variable-2 $a] [operator =] [builtin rand]([number 0], [number 2]);",
     "[keyword if] ([variable-2 $a] [operator ===] [number 2]) {",
     "  [variable-2 $a] [operator =] [builtin rand]([number 2], [number 4]);",
     "} [keyword elseif] ([variable-2 $a] [operator ===] [number 1]) {",
     "  [variable-2 $a] [operator +=] [builtin max]([number 0], [number 5]);",
     "} [keyword else] {",
     "  [variable-2 $a] [operator -=] [builtin min]([number 2], [number 3]);",
     "}",
     "[keyword echo] [variable-2 $a];");

  // FIXME: Should `:` and `?` be highlighted as "operator"
  MT("while",
     "[variable-2 $a] [operator =] [atom false], [variable-2 $i] [operator =] [number 0];",
     "[keyword while] ([variable-2 $a] [operator ===] [atom false]) {",
     "  [variable-2 $i][operator ++];",
     "  [variable-2 $a] [operator =] [variable-2 $i] [operator >=] [number 5] ? [atom true] : [atom false];",
     "}");

  MT("for",
     "[keyword for] ([variable-2 $i] [operator =] [number 0]; [variable-2 $i] [operator <] [number 5]; [variable-2 $i][operator ++]) {",
     "  [keyword echo] [string '.'];",
     "}");

  // To match JavaScript mode indentation
  MT("switch",
     "[variable-2 $a] [operator =] [string '3'];",
     "[keyword switch] ([variable-2 $a]) {",
     "  [keyword case] [number 1]:",
     "    [keyword echo] [string 'one'];",
     "    [keyword break];",
     "  [keyword case] [string '2']:",
     "    [keyword echo] [string 'two'];",
     "    [keyword break];",
     "  [keyword case] [number 3]:",
     "    [keyword echo] [string 'three'];",
     "    [keyword break];",
     "  [keyword default]:",
     "    [keyword echo] [string '...'];",
     "    [keyword break];",
     "}");

})();
