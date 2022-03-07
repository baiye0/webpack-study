/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {}; // CONCATENATED MODULE: ./src/hello-world.js

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            "next",
            value
          );
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function getString() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("hello");
      }, 2000);
    });
  }

  function helloWorld() {
    return _helloWorld.apply(this, arguments);
  }

  function _helloWorld() {
    _helloWorld = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var string;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return getString();

              case 2:
                string = _context.sent;
                console.log(string);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return _helloWorld.apply(this, arguments);
  }

  /* harmony default export */ const hello_world = helloWorld; // CONCATENATED MODULE: ./src/index.js
  // import imgSrc from "./assets/test.png";

  hello_world(); // const img = document.createElement("img");
  // img.src = imgSrc;
  // document.body.appendChild(img);
  // document.body.classList.add("hello");
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmRixNQUFBQSxPQUFPLENBQUMsT0FBRCxDQUFQO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSk0sQ0FBUDtBQUtEOztTQUVjRzs7Ozs7d0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDcUJMLFNBQVMsRUFEOUI7O0FBQUE7QUFDTU0sWUFBQUEsTUFETjtBQUVFQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUtBLGtEQUFlRCxVQUFmOztDQ1pBOztBQUNBO0FBQ0E7QUFFQUEsV0FBVSxJQUVWO0FBQ0E7QUFDQTtBQUVBLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hlbGxvLXdvcmxkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdHJpbmcoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKFwiaGVsbG9cIik7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoZWxsb1dvcmxkKCkge1xuICBsZXQgc3RyaW5nID0gYXdhaXQgZ2V0U3RyaW5nKCk7XG4gIGNvbnNvbGUubG9nKHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGQ7XG4iLCJpbXBvcnQgaGVsbG9Xb3JsZCBmcm9tIFwiLi9oZWxsby13b3JsZFwiO1xuLy8gaW1wb3J0IGltZ1NyYyBmcm9tIFwiLi9hc3NldHMvdGVzdC5wbmdcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmxlc3NcIjtcblxuaGVsbG9Xb3JsZCgpO1xuXG4vLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gaW1nLnNyYyA9IGltZ1NyYztcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblxuLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGVsbG9cIik7XG4iXSwibmFtZXMiOlsiZ2V0U3RyaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiaGVsbG9Xb3JsZCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9
