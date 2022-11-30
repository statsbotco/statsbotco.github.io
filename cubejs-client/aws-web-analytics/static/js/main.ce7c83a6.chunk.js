(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    123: function (e, t, n) {},
    190: function (e, t, n) {
      e.exports = n(360);
    },
    291: function (e, t, n) {},
    360: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(19),
        i = n.n(o),
        s = (n(123), n(73)),
        c = n(74),
        l = n(80),
        u = n(75),
        m = n(81),
        d = n(174),
        p = n(76),
        y = n(185),
        g = (n(196), n(365)),
        f = n(362),
        b = n(361),
        h = n(364),
        w = n(56),
        E = n.n(w),
        v = n(57),
        x = n(363),
        V = n(9),
        j = n(29),
        O = n.n(j),
        _ = n(175),
        k = n.n(_),
        C = n(119),
        A = n(82),
        S = n.n(A),
        D = n(176),
        P = n.n(D),
        q = n(120),
        T = n.n(q),
        I =
          (n(291),
          (function (e) {
            function t() {
              return Object(s.a)(this, t), Object(l.a)(this, Object(u.a)(t).apply(this, arguments));
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    T.a.highlightAll();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    T.a.highlightAll();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement("pre", null, r.a.createElement("code", { className: "language-javascript" }, this.props.code));
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        J = [O()().subtract(14, "d").format("YYYY-MM-DD"), O()().format("YYYY-MM-DD")],
        M = g.a.Header,
        R = (g.a.Footer, g.a.Sider, g.a.Content),
        N = function (e) {
          return r.a.createElement(
            V.Chart,
            { scale: { category: { tickCount: 8 } }, height: 400, data: e.chartPivot(), forceFit: !0 },
            r.a.createElement(V.Axis, {
              name: "category",
              label: {
                formatter: function (e) {
                  return O()(e).format("MMM DD");
                },
              },
            }),
            e.seriesNames().map(function (e) {
              return r.a.createElement(V.Axis, { name: e.key });
            }),
            r.a.createElement(V.Tooltip, { crosshairs: { type: "y" } }),
            e.seriesNames().map(function (e) {
              return r.a.createElement(V.Geom, { type: "line", position: "category*".concat(e.key), size: 2 });
            })
          );
        },
        Y = function (e, t) {
          return r.a.createElement(
            V.Chart,
            {
              height: 400,
              data: (function (e) {
                return e
                  .pivot()
                  .map(function (t) {
                    var n = t.xValues;
                    return t.yValuesArray.map(function (t) {
                      var a = Object(y.a)(t, 2),
                        r = a[0],
                        o = a[1];
                      return Object(p.a)({ x: e.axisValuesString(n, ", "), color: e.axisValuesString([r[0]], ", ") }, r[1], o && Number.parseFloat(o));
                    });
                  })
                  .reduce(function (e, t) {
                    return e.concat(t);
                  });
              })(e),
              forceFit: !0,
            },
            r.a.createElement(V.Legend, null),
            r.a.createElement(V.Axis, {
              name: "x",
              label: {
                formatter: function (e) {
                  return O()(e).format("MMM DD");
                },
              },
            }),
            r.a.createElement(V.Axis, { name: t }),
            r.a.createElement(V.Tooltip, null),
            r.a.createElement(V.Geom, { type: "intervalStack", position: "x*".concat(t), color: "color" })
          );
        },
        B = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpIjo0MDY3OH0.Vd-Qu4dZ95rVy9pKkyzy6Uxc5D-VOdTidCWYUVhKpYU",
        W = (function (e) {
          function t() {
            return Object(s.a)(this, t), Object(l.a)(this, Object(u.a)(t).apply(this, arguments));
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  S()("aws_web_uid") || S()("aws_web_uid", P()()),
                    Object(C.fetch)("https://4bfydqnx8i.execute-api.us-east-1.amazonaws.com/dev/collect", {
                      method: "POST",
                      body: JSON.stringify({ url: window.location.href, referrer: document.referrer, anonymousId: S()("aws_web_uid"), eventType: "pageView" }),
                      headers: { "Content-Type": "application/json" },
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return [
                    r.a.createElement(
                      g.a,
                      null,
                      r.a.createElement(M, null, r.a.createElement("h2", { style: { color: "#fff" } }, "AWS Web Analytics Dashboard")),
                      r.a.createElement(
                        R,
                        { style: { padding: "25px", margin: "25px" } },
                        r.a.createElement(
                          f.a,
                          { type: "flex", justify: "space-around", align: "top", gutter: 24 },
                          r.a.createElement(
                            b.a,
                            { span: 24, lg: 12 },
                            r.a.createElement(
                              h.a,
                              { title: "Page Views", style: { marginBottom: "24px" } },
                              r.a.createElement(v.QueryRenderer, {
                                query: { measures: ["PageViews.count"], timeDimensions: [{ dimension: "PageViews.timestamp", dateRange: J, granularity: "day" }] },
                                cubejsApi: E()(B),
                                render: function (e) {
                                  var t = e.resultSet;
                                  return (t && N(t)) || r.a.createElement(x.a, null);
                                },
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { span: 24, lg: 12 },
                            r.a.createElement(
                              h.a,
                              { title: "Unique Visitors", style: { marginBottom: "24px" } },
                              r.a.createElement(v.QueryRenderer, {
                                query: { measures: ["PageViews.userCount"], timeDimensions: [{ dimension: "PageViews.timestamp", dateRange: J, granularity: "day" }] },
                                cubejsApi: E()(B),
                                render: function (e) {
                                  var t = e.resultSet;
                                  return (t && N(t)) || r.a.createElement(x.a, null);
                                },
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Visitor by Referrer", style: { marginBottom: "24px" } },
                              r.a.createElement(v.QueryRenderer, {
                                query: {
                                  measures: ["PageViews.userCount"],
                                  dimensions: ["PageViews.referrer"],
                                  timeDimensions: [{ dimension: "PageViews.timestamp", dateRange: J, granularity: "day" }],
                                },
                                cubejsApi: E()(B),
                                render: function (e) {
                                  var t = e.resultSet;
                                  return (t && Y(t, "PageViews.userCount")) || r.a.createElement(x.a, null);
                                },
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Visitor by Referrer", style: { marginBottom: "24px" } }, r.a.createElement(
                                "a",
                                { href: "https://coindataflow.com/de/aktie/SEOVF" },
                                r.a.createElement("img", { src: "./cdf.svg", alt: "sernova aktie", style: { width: 14 , opacity: 0.5} })
                              ),
                              r.a.createElement(v.QueryRenderer, {
                                query: {
                                  measures: ["PageViews.userCount"],
                                  dimensions: ["PageViews.referrer"],
                                  timeDimensions: [{ dimension: "PageViews.timestamp", dateRange: J }],
                                },
                                cubejsApi: E()(B),
                                render: function (e) {
                                  var t = e.resultSet;
                                  return (
                                    (t &&
                                      (function (e, t) {
                                        return r.a.createElement(
                                          V.Chart,
                                          {
                                            height: 400,
                                            data: e.chartPivot().map(function (e) {
                                              return Object(d.a)({}, e, { category: e.x });
                                            }),
                                            forceFit: !0,
                                          },
                                          r.a.createElement(V.Coord, { type: "theta", radius: 0.75 }),
                                          r.a.createElement(V.Axis, { name: t }),
                                          r.a.createElement(V.Legend, { position: "right", name: "category", title: null }),
                                          r.a.createElement(V.Tooltip, { showTitle: !1 }),
                                          r.a.createElement(V.Geom, { type: "intervalStack", position: t, color: "x" })
                                        );
                                      })(t, "PageViews.userCount")) ||
                                    r.a.createElement(x.a, null)
                                  );
                                },
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Architecture", style: { marginBottom: "24px", textAlign: "center" } },
                              r.a.createElement("img", { src: "./architecture.png", style: { width: "100%", maxWidth: "500px" } })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Page contains this tracking code", style: { marginBottom: "24px" } },
                              r.a.createElement(I, {
                                code: "import { fetch } from 'whatwg-fetch';\nimport cookie from 'component-cookie';\nimport uuidv4 from 'uuid/v4';\n\nconst trackPageView = () => {\n  if (!cookie('aws_web_uid')) {\n    cookie('aws_web_uid', uuidv4());\n  }\n  fetch(\n    'https://4bfydqnx8i.execute-api.us-east-1.amazonaws.com/dev/collect',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        url: window.location.href,\n        referrer: document.referrer,\n        anonymousId: cookie('aws_web_uid'),\n        eventType: 'pageView'\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }\n  )\n}",
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Events collected using this Lambda function", style: { marginBottom: "24px" } },
                              r.a.createElement(I, {
                                code: "const AWS = require('aws-sdk');\nconst { promisify } = require('util');\n\nconst kinesis = new AWS.Kinesis();\n\nconst putRecord = promisify(kinesis.putRecord.bind(kinesis));\n\nconst response = (body, status) => {\n  return {\n    statusCode: status || 200,\n    body: body && JSON.stringify(body),\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Access-Control-Allow-Credentials': true,\n      'Content-Type': 'application/json'\n    }\n  }\n}\n\nmodule.exports.collect = async (event, context) => {\n  const body = JSON.parse(event.body);\n  if (!body.anonymousId || !body.url || !body.eventType) {\n    return response({\n      error: 'anonymousId, url and eventType required'\n    }, 400);\n  }\n\n  await putRecord({\n    Data: JSON.stringify({\n      anonymous_id: body.anonymousId,\n      url: body.url,\n      event_type: body.eventType,\n      referrer: body.referrer,\n      timestamp: (new Date()).toISOString(),\n      source_ip: event.requestContext.identity.sourceIp,\n      user_agent: event.requestContext.identity.userAgent\n    }) + '\\n',\n    PartitionKey: body.anonymousId,\n    StreamName: 'event-collection'\n  });\n\n  return response();\n};",
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { lg: 12, span: 24 },
                            r.a.createElement(
                              h.a,
                              { title: "Cube.js schema used for analytic querying", style: { marginBottom: "24px" } },
                              r.a.createElement(I, {
                                code: "cube(`PageViews`, {\n  sql: `select * from aws_web_analytics.aws_web_analytics_event_collection`,\n\n  measures: {\n    count: {\n      type: `count`\n    },\n\n    userCount: {\n      sql: `anonymous_id`,\n      type: `countDistinct`,\n    }\n  },\n\n  dimensions: {\n    url: {\n      sql: `url`,\n      type: `string`\n    },\n\n    anonymousId: {\n      sql: `anonymous_id`,\n      type: `string`\n    },\n\n    eventType: {\n      sql: `event_type`,\n      type: `string`\n    },\n\n    referrer: {\n      sql: `referrer`,\n      type: `string`\n    },\n\n    timestamp: {\n      sql: `from_iso8601_timestamp(timestamp)`,\n      type: `time`\n    }\n  }\n});",
                              })
                            )
                          ),
                          r.a.createElement(
                            b.a,
                            { span: 24, style: { textAlign: "center" } },
                            r.a.createElement(
                              "a",
                              { href: "#" },
                              r.a.createElement("img", { src: "./powered-by-cubejs-color.svg", style: { width: 200 } })
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(k.a, { size: 120, href: "https://github.com/statsbotco/" }),
                  ];
                },
              },
            ]),
            t
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      i.a.render(r.a.createElement(W, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[190, 2, 1]],
]);
//# sourceMappingURL=main.ce7c83a6.chunk.js.map
