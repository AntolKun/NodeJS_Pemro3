const express = require("express");
const Mahasiswa = require("../models/Mahasiswa");
const Dosen = require("../models/Dosen");
const router = express.Router();

router.get("/getMahasiswa", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/postMahasiswa", async (req, res) => {
  try {
    console.log(req.body);

    const mahasiswa = new Mahasiswa({
      prodi: req.body.prodi,
      nama: req.body.nama,
      npm: req.body.npm,
    });

    const addMahasiswa = await mahasiswa.save();

    res.json({
      message: "Berhasil menambah data",
      data: addMahasiswa,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/editMahasiswa/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const editMahasiswa = await Mahasiswa.findByIdAndUpdate(id, body);
    const mahasiswa = await Mahasiswa.findById(id);

    res.json({
      message: "Berhasil update data",
      data: mahasiswa,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteMahasiswa/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMahasiswa = await Mahasiswa.findByIdAndDelete(id);

    res.json({
      message: "Berhasil menghapus data",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getDosen", async (req, res) => {
  try {
    const dosen = await Dosen.find();
    res.json({
      message: "Berhasil menampilkan data dosen",
      data: dosen,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/postDosen", async (req, res) => {
  try {
    console.log(req.body);

    const dosen = new Dosen({
      nama: req.body.nama,
      nidn: req.body.nidn,
      matkul_diampu: req.body.matkul,
      alamat: req.body.alamat,
    });

    const addDosen = await dosen.save();

    res.json({
      message: "Berhasil menambah data dosen",
      data: addDosen,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/editDosen/:id", async (req, res) => {
  try {
    const idDosen = req.params.id;
    const body = req.body;

    const editDosen = await Dosen.findByIdAndUpdate(idDosen, body);
    const dosen = await Dosen.findById(idDosen);

    res.json({
      message: "Berhasil update data dosen",
      data: dosen,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteDosen/:id", async (req, res) => {
  try {
    const idDosen = req.params.id;
    const deleteDosen = await Dosen.findByIdAndDelete(idDosen);

    res.json({
      message: "Berhasil menghapus data dosen",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
