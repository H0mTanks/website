export const Register = () => {
  return (
    <div>
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
