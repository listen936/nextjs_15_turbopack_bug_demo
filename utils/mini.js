// namespace builder
(function _(namespace, path) {
  // The expected output is "", "wrapper", "wrapper.data", "wrapper.data.key"
  // The actual output is "", "wrapper", "data", "key"
  console.debug("####", path)

  for (var i = 0, keys = Object.keys(namespace); i < keys.length; i++) {
    var key = keys[i];
    // --------------------------------------------------------------------------
    console.debug("####", path ? true : false) // always true? why?
    // --------------------------------------------------------------------------
    parent[key] = _(namespace[key], path ? `${path}.${key}` : key, parent[key] || {});
    // parent[key] = _(namespace[key], Boolean(path) ? `${path}.${key}` : key, parent[key] || {});
  }
  return parent;
})({
  wrapper: {
    data: {
      key: {}
    },
  }
}, '');

