// CosmicMath (c) Reetabrata Bhandari

var ls = localStorage;
var currentscore;
var CosmicMath = $;
var $_ = false;
function $dup(arr, include) {
  if (arr.includes(include) == false) {
    arr.push(include);
  } else {
    null;
  }
}

CosmicMath = {
  BootApp: function () {},
  auth: {
    loadPage: function () {
      document.body.innerHTML =
        '<style>body {test-align: center; background: #fff !important; user-select: none; font-family: calibri;} </style> <span id="mainBoard"><span style="font-size: 36px;text-shadow: none;font-family: &apos;InternacionalB&apos;,&apos;Helvetica&apos;,&apos;Arial&apos;!important;color: #0000009e;display: block;width: fit-content;height: fit-content;margin-top: calc(100% - 10em);">Hi, what do we call you<b style=" color: #5c6bc0; font-size: 7vh; ">?</b></span></span><div id="loginPanel"><input autocorrect="off" required> <br><br>  <button id="submitLogin" type="submit" onclick="$.auth.processData(document.querySelector(&quot;#loginPanel > input&quot;).value)"><span style=" display: block; width: fit-content; height: fit-content; margin: auto; ">Next </span><span class="arrow" style="display: block;width: fit-content;height: fit-content;margin: auto;"><img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgOCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOCAwLjM2ODU5Mkw0Ljg2NzUxIDMuNjMxNDFDNC4zOTU2OSA0LjEyMjg2IDMuNjMwNzEgNC4xMjI4NiAzLjE1ODg5IDMuNjMxNDFMNi4yOTEzNyAwLjM2ODU5MUM2Ljc2MzIgLTAuMTIyODY0IDcuNTI4MTggLTAuMTIyODYzIDggMC4zNjg1OTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNLTEuNjExMTdlLTA4IDAuMzY4NTkyTDMuMTMyNDggMy42MzE0MUMzLjYwNDMxIDQuMTIyODYgNC4zNjkyOSA0LjEyMjg2IDQuODQxMTEgMy42MzE0MUwxLjcwODYzIDAuMzY4NTkxQzEuMjM2OCAtMC4xMjI4NjUgMC40NzE4MjQgLTAuMTIyODY0IC0xLjYxMTE3ZS0wOCAwLjM2ODU5MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" style=" width: 15px; height: 9px; margin: auto; transform: rotate(-90deg); "></span></button> </div>';
      var appName;
      document.title = "CosmicMath";
      document.oncontextmenu = function () {
        return false;
      };
      elmt = document.createElement("meta");
      elmt.name = "description";
      elmt.content =
        "CosmicMath, a math practicing platform created by Reetabrata Bhandari.";
      elmt101 = document.head.append(elmt);
      a = document.querySelector("body");
      el = document.createElement("div");
      el.innerHTML =
        '<div title="CosmicMath" id="app"><span style=" margin: auto; ">CosmicMath</span><svg onclick="CosmicMath.launchApp()" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style=" width: 35px; fill: #ffffffdb; margin: auto; margin-left: 12px; "><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg></div>';
      a.append(el);
    },
    processData: function (username) {
      if (username != "") {
        ls.setItem("name", username);
        $.auth.username = username;
        if ($.auth.check() == "usr_verified_true") {
          $.launchApp();
        }
      } else {
        $.msg("Please enter your name");
      }
    },
    check: function () {
      if (ls.getItem("name") == undefined) {
        CosmicMath.auth.loadPage();
      } else return "usr_verified_true";
    },
    logout: function () {
      ls.clear();
      $.auth.check();
    },
  },
  courses: {
    Topics: [
      "Topics.Arithmetic.Addition.Easy",
      "Topics.Arithmetic.Addition.Difficult",
      "Topics.Arithmetic.Subtraction.Easy",
      "Topics.Arithmetic.Subtraction.Difficult",
      "Topics.Arithmetic.Multiply.Easy",
      "Topics.Arithmetic.Multiply.Medium",
      "Topics.Arithmetic.Multiply.Difficult",
      "Topics.Arithmetic.Divide",
      "Topics.Arithmetic.Indices.Easy",
      "Topics.Arithmetic.Indices.Medium",
      "Topics.Arithmetic.Indices.Difficult",
      "Topics.Arithmetic.Square root.Easy",
      "Topics.Arithmetic.Square root.Medium",
      "Topics.Arithmetic.Square root.Difficult",
      "Topics.Arithmetic.Convert.Decimal",
      "Topics.Arithmetic.Convert.Percentage",
      "Topics.Arithmetic.Factors and divisors",
      "Topics.Arithmetic.Number system",
      "Topics.Permutations and combinations.Factorials",
      "Topics.Permutations and combinations.Permutations",
      "Topics.Permutations and combinations.Combinations",
      "Topics.Percentages.Type 1",
      "Topics.Percentages.Type 2",
      "Topics.Series.Arithmetic progression",
      "Topics.Series.Geometric progression",
      "Topics.Trigonometry.Trigonometric ratios",
      "Topics.Trigonometry.Trigonometric approximations",
      "Topics.Algebra.Cubic expressions.Cubic expansion",
      "Topics.Algebra.Cubic expressions.Cubic factorisation",
      "Topics.Algebra.Quadratic equations",
      "Topics.Simultaneous equations.Type 1",
      "Topics.Simultaneous equations.Type 2",
      "Topics.Simultaneous equations.Type 3",
      "Topics.Simultaneous equations.Type 4",
      "Topics.Simultaneous equations.Type 5",
      "Topics.Simultaneous equations.Linear equations",
      "Topics.Fractions.Multiplication",
      "Topics.Fractions.Addition",
      "Topics.Fractions.Subtraction",
      "Topics.Circle theorem.Degrees to radians",
      "Topics.Circle theorem.Radians to degrees",
      "Topics.Circle theorem.Sectors",
      "Topics.Statistics.Binomial distribution",
      "Topics.Statistics.Geometric distribution",
      "Topics.Logarithms.Level 1",
      "Topics.Logarithms.Level 2",
    ],
  },
  beta: {
    render: function (isHome, active, pos) {
      function getTopic(updateLocalStorage = false) {
        if (updateLocalStorage === true) {
          var $topic = [];
          $.courses.Topics.forEach(function (e) {
            $dup($topic, e);
          });
          ls.setItem("__topic", "");
          $topic.forEach(function (name) {
            $topic[$topic.indexOf(name)] = name.split(".");
            ls.__topic = ls.__topic.concat(name + ",");
          });
          return ls.__topic.split(",");
        } else {
          return ls.__topic.split(",");
        }
      }
      function getActiveTopic(lastTopic, pos) {
        $topic = getTopic(true);
        $activeHolder = [];
        $topic.forEach(function (a) {
          a = a.split(".");
          $dup($activeHolder, [a[pos - 1], a[pos]]);
        });
        $active = [];
        $activeHolder.forEach(function (e) {
          if (e[0] === lastTopic) {
            $dup($active, e[1]);
          } else null;
        });
        return $active;
      }
      if (isHome === true) {
        ls.setItem("location", 1);
        ls.setItem("cm_address", "Home");
        document.querySelector("#mainBoard").innerHTML = "";
        $$$$ = document.createElement("span");
        $$$$.id = "t100";
        $$$$.innerHTML = "Topics";
        document.querySelector("#mainBoard").append($$$$);
        document.querySelector(
          "#app > svg"
        ).innerHTML = `<path fill-rule="evenodd" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>`;
        document.querySelector("#app > svg").onclick = () => {
          $.infoPanel(
            1,
            "CosmicMath",
            `Introducing the ultimate CosmicMath app, housing ${$.courses.Topics.length} different types of sums, which will help you build lightning-fast calculation speed and internalize mathematical concepts. <br><br>CosmicMath algorithmically-generates unlimited sums for you to practice regularly and familiarize yourself with numbers and master mathematics. It improves your meta-skills such as calculation speed and helps you to build mathematical intuition.<br><br>The CosmicMath interface has been designed with utmost care for you, priortizing immersive experience and responsiveness. You will find it easier to focus with this minimal and responsive user-interface.<br><br>Meet the Fluent Mode which enables you to solve sums fluently without spending much time for submitting. It automatically submits if you have entered the correct answer and lets you proceed to the next sum instantly.<br><br>I would appreciate any feedback regarding the UI or queries regarding errors. This app is still under development.<br><br> - Reetabrata Bhandari<br><br><div id="links"><svg onclick="window.open('https://github.com/jimfleax/CosmicMath', 'blank')" height="25" aria-hidden="true" viewBox="0 0 16 16" width="25" class="github" style=" "> <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path> </svg><img onclick="window.open('https://jimfleax.onrender.com/', 'blank')" src="data:image/png;base64,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" style=" " class="jimfleax"></div>`
          );
        };
        store = getActiveTopic("Topics", 1);
        store.forEach(function (a, b) {
          $$$ = document.createElement("div");
          $$$.id = "course";
          $$$.innerHTML = '<button tabindex="' + b + '">' + a + "</button>";

          document.querySelector("#mainBoard").append($$$);
          $$$.onclick = function () {
            ls.setItem("__currActive", "Topics");
            $.beta.render(false, a, 2);
            ls.location++;
          };
          if (b + 1 === store.length) {
            $$$ = document.createElement("div");
            $$$.id = "course";
            $$$.innerHTML = '<button tabindex="' + (b + 1) + '">Mixed</button>';

            document.querySelector("#mainBoard").append($$$);
            $$$.onclick = function () {
              ls.setItem("__currActive", "Topics");
              $.mixedCourse();
              ls.location++;
            };
          }
          delete $$$;
          delete $$$$;
        });
      } else {
        store = getActiveTopic(active, pos);
        document.querySelector(
          "#app > svg"
        ).innerHTML = `<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>`;
        document.querySelector("#app > svg").onclick = () => {
          CosmicMath.launchApp();
        };
        if (
          ls.cm_address.split("_").length <= 1 &&
          ls.cm_address.split("_").includes("Home") === false
        ) {
          ls.cm_address = "Home";
        } else if (ls.cm_address.split("_").includes("Home") === true) {
          ls.cm_address = ls.cm_address.concat(`_${active}`);
        } else {
          console.log("errrr");
        }

        d = getTopic();
        f = [];
        d.forEach(function (e) {
          $dup(f, e.split("."));
        });
        pos;
        atc = f.filter(function (i) {
          return i.includes(active);
        })[0];
        if (store[0] === undefined && store.length === 1) {
          $.createSum(active, ls.cm_address);
        } else {
          document.querySelector("#mainBoard").innerHTML = "";
          $$$$ = document.createElement("span");
          $$$$.id = "t100";
          $$$$.innerHTML = active;
          document.querySelector("#mainBoard").append($$$$);
          $$$$.onclick = function () {
            if (ls.location <= 1) {
              console.log("At homepage...");
              ls.cm_address = "Home";
            } else {
              try {
                cm_address = ls.cm_address.split("_");
                if (
                  cm_address.length <= 1 &&
                  cm_address.includes("Home") === false
                ) {
                  ls.cm_address = "Home";
                } else if (cm_address.includes("Home") === true) {
                  ls.cm_address = cm_address.slice(null, -2).join("_");
                } else {
                  null;
                }
              } catch (e) {
                msg(e);
                Error(e);
              }
              $.beta.render(false, atc[pos - 2], pos - 1);
              ls.location--;
            }
          };
          store.forEach(function (a, b) {
            $$$ = document.createElement("div");
            $$$.id = "course";
            $$$.innerHTML = '<button tabindex="' + b + '">' + a + "</button>";

            document.querySelector("#mainBoard").append($$$);
            $$$.onclick = function () {
              ls.setItem("__currActive", active);
              $.beta.render(false, a, pos + 1);
              ls.location++;
            };
            if (b + 1 === store.length) {
              $$$ = document.createElement("div");
              $$$.id = "course";
              $$$.innerHTML =
                '<button tabindex="' + (b + 1) + '">Mixed</button>';

              document.querySelector("#mainBoard").append($$$);
              $$$.onclick = function () {
                $.mixedCourse();
              };
            }
            delete $$$;
            delete $$$$;
          });
        }
      }
    },
  },
  mixedCourse: function () {
    var basket = [];
    $.courses.Topics.forEach((f) => {
      basket.push("Home_" + f.split(".").slice(1).join("_"));
    });
    basket = basket.filter((a) => {
      return a.includes(localStorage["cm_address"]);
    });
    basket = basket[$.random(basket.length - 1, true)];
    document.querySelector(
        "#app > svg"
      ).innerHTML = `<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>`;
      document.querySelector("#app > svg").onclick = () => {
        CosmicMath.launchApp();
      };
    $.createSum(basket.split("_").pop(), basket);
  },
  launchApp: function () {
    if ($.auth.check() == "usr_verified_true") {
      var appName;
      document.title = "CosmicMath";
      document.oncontextmenu = function () {
        return false;
      };
      elmt = document.createElement("meta");
      elmt.name = "description";
      elmt.content =
        "CosmicMath, a math practicing platform created by Reetabrata Bhandari.";
      elmt101 = document.head.append(elmt);
      a = document.querySelector("body");
      elmt =
        `<div title="CosmicMath" id="app" style=""><span style=" margin: auto; ">CosmicMath</span><svg onclick="CosmicMath.launchApp()" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style=" width: 35px; fill: #ffffffdb; margin: auto; margin-left: 12px; "><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg></div><span id="appName">${appName}</span><span id="appName1"><b style=" display: block; margin: auto; ">${localStorage['name']}</b><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" style=" width: 25px; height: 25px; margin: auto 0px auto 8px; display: block; padding: 6px; fill: #9fa8da; stroke: #9fa8da; stroke-linejoin: round; stroke-width: 2px; "> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z" fill="#000000"></path> </svg></span>`;
      el = document.createElement("div");
      el.innerHTML = elmt;
      a.innerHTML = '<span id="mainBoard"> </span>';
      a.append(el);
      option = document.querySelector("#course > button");
      localStorage["cm_address"] = "Home";
      $.beta.render(true);
      app100 = document.querySelector("#app");
      app100.addEventListener("dblclick", function () {
        $.infoPanel(
          1,
          "CosmicMath",
          "Introducing the ultimate CosmicMath app which will help you build lightning-fast calculation speed and internalize mathematical concepts. <br><br>CosmicMath algorithmically-generates unlimited sums for you to practice regularly and familiarize yourself with numbers and master mathematics. It improves your meta-skills such as calculation speed and builds mathematical intuition.<br><br>The CosmicMath interface has been designed with utmost care for you, priortizing immersive experience and responsiveness. You will find it easier to focus with this minimal and responsive user-interface.<br><br>Introducing Fluent Mode, designed to help you solve problems more efficiently by streamlining the process. With Fluent Mode, there's no need to manually submit your answers—once you input the correct answer, it's automatically submitted, allowing you to move on to the next problem without delay. This feature not only saves time but also enables a smoother and faster problem-solving experience.<br><br>Since the app is yet to reach a stable functional stage, often (hopefully rarely) the sum generates a wrong answer due to bugs in the algorithm - to fix this and ensure the app is generating correct answer I have created a shortcut to see the answer (to be used rarely when you have a doubt regarding the answer). To use this, type <code>jim.ans</code> in any of the input blanks and submit.<br><br>I would appreciate any feedback regarding the UI or queries regarding errors. This app is still under development.<br><br> Please note that CosmicMaths is being optimized to aid IPM aspirants to improve mental mathematical skills. Some updates have been made and more are coming up!! <br><br>- Developer [Reetabrata Bhandari] [ReetUI]"
        );
      });
      eventlist = document
        .querySelector("#appName1")
        .addEventListener("click", function () {
          ell = document.createElement("div");
          ell.innerHTML = `<div id="backdrop1" onclick="document.querySelector(&quot;#backdrop1&quot;).remove();document.querySelector(&quot;#sum_info1&quot;).remove();"></div><div id="sum_info1">    <div id="control-panel"> <h1 style="color: #1a237e9c;margin-inline: 1em;">Settings</h1> <div id="accset"> <span style="font-size: 3vh;font-family: 'InternacionalB';color: #000000d9;">Change your name</span><br><input value="${ls.name}" style="margin: 2em 0em;font-family: 'InternacionalR';text-align: center;width: 15em;height: 2.5em;font-size: 20px;padding: 0em 1em;border: none;background: #0000000f;border-radius: 10px;color: #000000ab;transition: 200ms;"><br> <br> <button id="btn" onclick="$.auth.logout();" style=" ">Logout</button><button id="saveCh" class="setBut" style=" ">Save changes and close</button> </div> </div> </div>`;
          a.append(ell);
          document
            .querySelector("#saveCh")
            .addEventListener("click", function () {
              ls.setItem(
                "name",
                document.querySelector("#accset > input").value
              );
              $.auth.check();
              document.querySelector(`#backdrop1`).remove();
              document.querySelector(`#sum_info1`).remove();
              $.launchApp();
            });
        });
    } else {
      null;
    }
  },
  infoPanel: function (type, title, text) {
    CosmicMath.auth.check();

    if (type == 0) {
      document.querySelector("#backdrop").parentElement.remove();
    } else if (type == 1) {
      k100 = document.createElement("div");
      k100.innerHTML =
        '<div id="backdrop" onclick="$.infoPanel(0)"></div><div id="sum_info"> <span class="h_info" style=" ">' +
        title +
        '</span> <br><br> <span class="p_info">' +
        text +
        "</span> <br> </div>";
      document.querySelector("body").append(k100);
      document.querySelector("#sum_info").removeEventListener("click", onclick);
    }
  },
  msg: function (content) {
    if (document.querySelectorAll("#msg-wrapper").length != 0) {
      document.querySelector(
        "#msg-wrapper"
      ).style.cssText = `opacity: 0!important`;
      document.querySelector("#msg-wrapper").remove();
    }
    d101 = document.createElement("div");
    d101.id = "msg-wrapper";
    d101.innerHTML =
      '<span id="msg" style="visibility: visible;"><span style="">' +
      content +
      "</span></span>";
    document.children[0].append(d101);

    d101.onclick = () => {
      document.querySelector(
        "#msg-wrapper"
      ).style.cssText = `opacity: 0!important`;
      document.querySelector("#msg-wrapper").remove();
    };
    setTimeout(function () {
      try {
        document.querySelector(
          "#msg-wrapper"
        ).style.cssText = `opacity: 0!important`;
        document.querySelector("#msg-wrapper").remove();
      } catch (e) {
        null;
      }
    }, 3000);
    delete d101;
  },

  score: function (type) {
    CosmicMath.auth.check();

    if (type === 0) {
      if (document.querySelector("#sc") === null) {
        br1 = document.querySelector("#braincrunchmode");
        br01 = document.createElement("div");
        br01.style.width = "fit-content";
        br01.style.height = "fit-content";
        br01.style.margin = "auto";
        br01.innerHTML =
          '<span id="sc" style=" display: block; width: fit-content; padding-block: 15px 10px; margin: auto; ">' +
          currentscore +
          "</span>";
        br1.append(br01);
        currentscore = 0;
      }
    } else if (type === -1) {
      x = ls.getItem("wrong");
      ls.setItem("wrong", x++);
    } else if (type == 1) {
    }
  },
  random: function (length, isTrue, ...exclude) {
    num = Math.random() * length;
    if (isTrue == true) {
      num = Math.round(num);
    } else {
      return num;
    }
    if (exclude.includes(num) === true) {
      return $.random(length, isTrue, ...exclude);
    } else {
      return num;
    }
  },
  appHelp: {
    Home_Arithmetic_Divide: {
      content:
        "Enter you answer as the quotient first, followed by a comma (,) and then the remainder, without any space in between.<br><br> For example, if a certain sum has the answer: 2 as the quotient and 3 as the remainder, the required answer would be <code>2,3</code>.<br><br>",
    },
    Home_Arithmetic_Squareroot: {
      content:
        "Enter your answer upto two decimal places. (e.g., <code>a.bc</code>)",
    },
    Home_Arithmetic_Convert_Decimal: {
      content:
        "Enter your answer upto four decimal places. (e.g., <code>a.bcde</code>)",
    },
    Home_Arithmetic_Convert_Percentage: {
      content:
        "Enter your answer upto one decimal place and omit the percentage sign. (e.g., <code>ab.c</code>)",
    },
    Home_Percentages_Type1: {
      content:
        "Enter your answer upto two decimal places (e.g., <code>a.bc</code>)",
    },
    Home_Percentages_Type2: {
      content:
        "Enter the negative value if the change is a reduction, and enter your answer rounded off to the nearest whole number without the % sign.",
    },
    Home_Series_Arithmeticprogression: {
      content:
        'This is an arithmetic progression app. Here the <span><b style=" font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia; ">T</b><b style=" font-size: 25px; font-weight: 400; ">n</b></span> represents the nth term of the series. Similarly, the <span><b style=" font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia; ">S</b><b style=" font-size: 25px; font-weight: 400; ">n</b></span> represents the sum of the terms till the nth term of the series.<br><br>',
    },
    Home_Trigonometry_Trigonometricratios: {
      content:
        "If your answer contains a root, enter it by replacing it with an asterisk (*). For example, if your answer is 2/√3, enter it as <code>2/*3</code>.<br><br>If your answer is infinity then enter <code>I</code>.<br><br>",
    },
    Home_Algebra_Cubicexpressions_Cubicexpansion: {
      content:
        "Enter only the integer coefficients excluding the variables, each separated by a comma. (e.g.,if the expression is 2x³+3x²+4x+5 write <code>2,3,4,5</code>)",
    },
    Home_Algebra_Quadraticequations: {
      content:
        "Enter the values of 𝑥 separated by a comma. (e.g., <code>2,-4</code>)",
    },
    Home_Circletheorem_Sectors: {
      content:
        "The angle given is in radians, so there is likely to be decimal answers. Please give your answers to 1 decimal place, in case of a decimal answer.",
    },
    Home_Arithmetic_Numbersystem: {
      content: "Convert the following base 10 number to the given base.",
    },
    Home_Statistics_Binomialdistribution: {
      content:
        "Enter your answer upto two decimal places. (e.g., <code>a.bc</code>)",
    },
    Home_Algebra_Cubicexpressions_Cubicfactorisation: {
      content:
        "Enter the roots in the format <code>(ax+b),(cx+d),(ex+f)</code>",
    },
  },
  fluentMode: function (id, address) {
    CosmicMath.auth.check();
    document.querySelector("#fluent").classList.add("active");
    ds = document.querySelector("#sc");
    ds.innerHTML = currentscore;
    r = document
      .querySelector("#response")
      .addEventListener("keyup", function () {
        res = [];
        document.querySelectorAll("#response").length < 1
          ? document.querySelectorAll("#response").forEach((a) => {
              res.push(a.value);
            })
          : (res = document.querySelector("#response").value);
        document.querySelector("#btn").click();
        $0 === "correct"
          ? ((document.querySelector("#sc").innerHTML = currentscore++),
            $.createSum(id, address),
            $.fluentMode(id, address),
            document.querySelector("#response").focus())
          : null;
      });
  },
  submit: function (
    id,
    address,
    res,
    answer,
    isArray = false,
    actionRequired = true
  ) {
    CosmicMath.auth.check();
    var isMixed = !(address === localStorage["cm_address"]);
    $_ ? (actionRequired = false) : null;
    var output;
    if (isArray === true) {
      !(typeof answer === "object") ? (answer = answer.split(",")) : null;
      answer.forEach(function (m, n) {
        answer[n] = parseFloat(m);
      });
      answer = answer.sort().join(",");
      !(typeof res === "object") ? (res = res.split(",")) : null;
      res.forEach(function (m, n) {
        res[n] = parseFloat(m);
      });
      res = res.sort().join(",");
      if (res === answer) {
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn">Next</button></div>`),
            (document.querySelector("#nxtBtn").onclick = () => {
              isMixed ? $.mixedCourse() : $.createSum(id, address);
            }))
          : (output = "correct");
        document.querySelectorAll("#response").forEach((l) => {
          l.disabled = true;
        });
      } else
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn">See answer</button></div>`),
            (document.querySelector("#nxtBtn").onclick = () => {
              document.querySelector("#nxtBtn").innerHTML = "Next";
              document.querySelector("#nxtBtn").onclick = () => {
                isMixed ? $.mixedCourse() : $.createSum(id, address);
              };
              document.querySelector("#btn").disabled = true;
              document.querySelectorAll("#response").forEach((g) => {
                g.disabled = true;
                g.style.background = `rgb(76 175 80 / 18%)`;
                g.style.boxShadow = `0px 0px 5px -1px #1fcf264d`;
                g.style.border = `1px solid rgb(76 175 80 / 48%)`;
                g.opacity = `1`;
              });
              document.querySelectorAll("#response").length > 1
                ? document.querySelectorAll("#response").forEach((elm, k) => {
                    elm.value = !(typeof answer === "object")
                      ? answer.split(",")[k]
                      : answer[k];
                  })
                : (document.querySelector("#response").value = answer);
            }))
          : (output = "wrong");
    } else if (isArray === false) {
      if (parseFloat(res).toString() === parseFloat(answer).toString()) {
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn">Next</button></div>`),
            document.querySelectorAll("#response").forEach((l) => {
              l.disabled = true;
            }),
            (document.querySelector("#nxtBtn").onclick = () => {
              isMixed ? $.mixedCourse() : $.createSum(id, address);
            }))
          : (output = "correct");
      } else
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn">See answer</button></div>`),
            (document.querySelector("#nxtBtn").onclick = () => {
              document.querySelector("#nxtBtn").innerHTML = "Next";
              document.querySelector("#nxtBtn").onclick = () => {
                isMixed ? $.mixedCourse() : $.createSum(id, address);
              };
              document.querySelector("#btn").disabled = true;
              document.querySelectorAll("#response").forEach((g) => {
                g.disabled = true;
                g.style.background = `rgb(76 175 80 / 18%)`;
                g.style.boxShadow = `0px 0px 5px -1px #1fcf264d`;
                g.style.border = `1px solid rgb(76 175 80 / 48%)`;
                g.opacity = `1`;
              });
              document.querySelectorAll("#response").length > 1
                ? document.querySelectorAll("#response").forEach((elm, k) => {
                    elm.value = !(typeof answer === "object")
                      ? answer.split(",")[k]
                      : answer[k];
                  })
                : (document.querySelector("#response").value = answer);
            }))
          : (output = "wrong");
    } else if (isArray === "expression") {
      if (res.toString() === answer.toString()) {
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>`),
            document.querySelectorAll("#response").forEach((l) => {
              l.disabled = true;
            }),
            (document.querySelector("#nxtBtn").onclick = () => {
              isMixed ? $.mixedCourse() : $.createSum(id, address);
            }))
          : (output = "correct");
      } else
        actionRequired
          ? ((document.querySelector(
              "#a100"
            ).innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn">See answer</button></div>`),
            (document.querySelector("#nxtBtn").onclick = () => {
              document.querySelector("#nxtBtn").innerHTML = "Next";
              document.querySelector("#nxtBtn").onclick = () => {
                isMixed ? $.mixedCourse() : $.createSum(id, address);
              };
              document.querySelector("#btn").disabled = true;
              document.querySelectorAll("#response").forEach((g) => {
                g.disabled = true;
                g.style.background = `rgb(76 175 80 / 18%)`;
                g.style.boxShadow = `0px 0px 5px -1px #1fcf264d`;
                g.style.border = `1px solid rgb(76 175 80 / 48%)`;
                g.opacity = `1`;
              });
              document.querySelectorAll("#response").length > 1
                ? document.querySelectorAll("#response").forEach((elm, k) => {
                    elm.value = !(typeof answer === "object")
                      ? answer.split(",")[k]
                      : answer[k];
                  })
                : (document.querySelector("#response").value = answer);
            }))
          : (output = "wrong");
    }
    $_ ? ($0 = output) : null;
    return output;
  },
  err: [],
  createSum: function (input, address) {
    CosmicMath.auth.check();
    if (document.querySelector("#appName1") === undefined) {
      console.log("All set!!");
    } else {
      try {
        document.querySelector("#appName1").remove();
      } catch (e) {
        null;
      }
    }

    !document.querySelector("#braincrunchmode")
      ? ((fluentModeEl = document.createElement("div")),
        (fluentModeEl.innerHTML = `<span title="Fluent Mode" onclick="$.score(0);CosmicMath.fluentMode('${input}', '${address}');$.msg('Fluent Mode is active');" id="braincrunchmode" style="visibility: visible;"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="fluent" viewBox="0 0 297.961 297.961" xml:space="preserve"> <path d="M235.443,4.316C234.064,1.675,231.331,0,228.35,0H111.391c-3.537,0-6.654,2.341-7.666,5.729l-41.78,140.009  c-0.723,2.422-0.259,5.029,1.251,7.055c1.51,2.027,3.889,3.207,6.415,3.207h65.579l-26.419,132.38  c-0.769,3.85,1.369,7.697,5.047,9.07c0.917,0.342,1.863,0.511,2.796,0.511c2.806,0,5.496-1.48,6.954-4.04l103.03-180.928  c1.41-2.477,1.396-5.533-0.036-7.997c-1.432-2.464-4.066-3.996-6.916-3.996h-46.392l61.658-88.415  C236.617,10.14,236.822,6.959,235.443,4.316z"></path> </svg></span></span>`),
        document.querySelector("body").append(fluentModeEl))
      : null;
    $_ = Boolean(document.querySelector("#sc"));
    var helpcontent;
    var addr = [];
    address.split("_").forEach((k) => {
      if (k.split(" ").length >= 2) {
        k = k.split(" ").join("");
        addr.push(k);
      } else {
        addr.push(k);
      }
    });
    console.log("App code : " + input + "\nAddress: " + addr.join("_"));
    if ($.appHelp[addr.join("_")] === undefined) {
      helpcontent = "No help is provided.";
    } else {
      helpcontent = $.appHelp[addr.join("_")].content;
    }
    document.querySelector("#appName").innerHTML =
      address.split("_").splice(1).join("\t>\t") +
      `<div title="Show help and comments for the sum." style="margin:auto;width:fit-content;height:fit-content;"><svg viewBox="0 0 20 20" class="sumHelp"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 10.5a.75.75 0 110 1.5.75.75 0 010-1.5zm0-8a2.5 2.5 0 011.65 4.38l-.15.12-.22.17-.09.07-.16.15c-.33.36-.53.85-.53 1.61a.5.5 0 01-1 0 3.2 3.2 0 011.16-2.62l.25-.19.12-.1A1.5 1.5 0 0010 6.5c-.83 0-1.5.67-1.5 1.5a.5.5 0 01-1 0A2.5 2.5 0 0110 5.5z"></path></svg></div>`;
    document
      .querySelector("#appName > div")
      .setAttribute(
        `onclick`,
        `$.infoPanel(1,"${address.split("_").join(" > ")}","${helpcontent}")`
      );
    var appname = document.querySelector("#appName");
    appname.style.visibility = "visible";
    try {
      a = document.querySelector("#mainBoard");
      a.innerHTML = `<div class="d212"><div id="appMain"></div><div id="a100"></div></div>`;
      var addr = [];
      address.split("_").forEach((k) => {
        if (k.split(" ").length >= 2) {
          k = k.split(" ").join("");
          addr.push(k);
        } else {
          addr.push(k);
        }
      });
      eval(`$db.${addr.join("_")}.interface("${input}","${addr.join("_")}")`);
    } catch (err) {
      this.err.push(err);
      console.log(err);
      $.msg(err);
      this.err.length >= 10
        ? this.createSum(input, address)
        : $.msg("A fatal error has occured. Please retry again");
    }
    document.querySelector("#braincrunchmode").onclick = function () {
      $.score(0);
      $_ = true;
      try {
        $.fluentMode(input, address);
      } catch (e) {
        $.fluentMode(input, address);
      }

      $.msg(`Fluent Mode is active.`);
    };
    //delete fluentModeEl;
  },
  round: function (num, limit) {
    var rounded = [];
    num = parseFloat(num).toString();
    number = num.split("");
    count = 0;
    isPoint = false;
    number.forEach((a) => {
      b++;
      if (count <= limit) {
        if (a === 0 && isPoint === true) {
          count++;
          rounded.push(0);
        } else if (a != 0 && isPoint === false) {
          count++;
          rounded.push(a);
        } else if (a === ".") {
          isPoint = true;
          rounded.push(".");
        } else if (a != 0 && isPoint === true) {
          count++;
          if ((count = limit)) {
          }
        }
      }
    });
  },
};

var $ = CosmicMath;
// isArray in flashmode not working
