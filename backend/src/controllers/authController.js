const authService = require("../services/authService");
async function register(req, res) {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.json({
        error: "All fields are required"
      });
    }
    const result = await authService.registerUser(
      name,
      email,
      phone,
      password
    );
    if (result.error) {
      return res.json({
        error: result.error
      });
    }
    res.json({
      message: "Registration successful",
      user: result.user
    });
  } catch (error) {
    console.log(error);

    res.json({
      error: "Registration failed"
    });
  }
}

module.exports = {register};