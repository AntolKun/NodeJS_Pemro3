const { default: mongoose } = require("mongoose");

const mahasiswaSchema = new mongoose.Schema(
  {
    npm: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    prodi: {
      type: String,
      required: true,
    },
  },
  {
    collection: "mahasiswa",
  }
);

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
