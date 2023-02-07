exports.isLoggedIn = (req, res, next) => {
  if (req.headers.cookie) {
    next();
  } else {
    return res.send(
      `<script>
          alert("로그인이 필요한 상태입니다.");
          window.location.href = "/login";
        </script>`
    );
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.headers.cookie) {
    next();
  } else {
    return res.send(
      `<script>
          alert("이미 로그인한 상태입니다.");
          window.location.href = "/me";
        </script>`
    );
  }
};
