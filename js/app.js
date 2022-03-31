window.onload = function () {
  // setup db
  main();
};

function main() {
  var root = document.body;

  var menu = [
    { link: "home", text: "Home" },
    { link: "page2", text: "Seite 2" }
  ];

  shHeader = function () {
    return m("header", { class: "container" }, [
      m("nav", [
        m("ul", m("li", m("strong", "Brand!"))),
        m(
          "ul",
          menu.map(function (x) {
            return m(
              "li",
              m("a", { href: "#!/" + x.link, role: "button" }, x.text)
            );
          })
        )
      ])
    ]);
  };

  shFooter = function () {
    return m("footer", { class: "container" }, [m("hr"), m("p", "Footer")]);
  };

  var pgIndex = {
    view: function () {
      return [
        shHeader(),
        m("main", [
          m("h1", { class: "title" }, "My first app!"),
          m("button", "Jim")
        ]),
        shFooter()
      ];
    }
  };

  var pgPage2 = {
    view: function () {
      return [
        shHeader(),
        m("main", [m("h1", { class: "title" }, "Seite 2")]),
        shFooter()
      ];
    }
  };

  m.route(root, "/index", {
    "/index": pgIndex,
    "/page2": pgPage2
  });
}
