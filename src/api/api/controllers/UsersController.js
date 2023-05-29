"use strict";
const util = require("util");
const mysql = require("mysql");
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const passEmail = "vu456@gmail.com";

module.exports = {
  //Lấy dữ liệu từ api
  // get: (req, res) => {
  //   let sql = "SELECT * FROM field";
  //   db.query(sql, (error, response) => {
  //     console.log("Chạy tại đây");
  //     if (error) {
  //       throw error;
  //     }
  //     res.json(response);
  //     console.log(response);
  //   });
  // },
  getField: (req, res) => {
    let sql = "SELECT * FROM field";
    db.query(sql, (error, response) => {
      console.log("Chạy tại đây");
      if (error) {
        throw error;
      }
      res.json(response);
      console.log(response);
    });
  },
  getAuthor: (req, res) => {
    let sql = "SELECT * FROM author";
    db.query(sql, (error, response) => {
      console.log("Chạy tại đây");
      if (error) {
        throw error;
      }
      res.json(response);
      console.log(response);
    });
  },
  getPublish: (req, res) => {
    let sql = "SELECT * FROM publish";
    db.query(sql, (error, response) => {
      console.log("Chạy tại đây");
      if (error) {
        throw error;
      }
      res.json(response);
      console.log(response);
    });
  },
  getSupplier: (req, res) => {
    let sql = "SELECT * FROM supplier";
    db.query(sql, (error, response) => {
      console.log("Chạy tại đây");
      if (error) {
        throw error;
      }
      res.json(response);
      console.log(response);
    });
  },

  //Lấy dữ liệu chi tiết từ api
  detail: (req, res) => {
    console.log("=======");
    let sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [req.params.usersId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json(response[0]);
    });
  },

  // update: (req, res) => {
  //   console.log("=======");
  //   let data = req.body;
  //   let personId = req.params.usersId;
  //   let sql = "UPDATE users SET ? WHERE id = ?";
  //   db.query(sql, [data, personId], (err, response) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.json({ message: "Update success!" });
  //   });
  // },
  updateField: (req, res) => {
    console.log("=======");
    let data = req.body;
    let fieldIdId = req.params.fieldId;
    let sql = "UPDATE field SET ? WHERE id = ?";
    db.query(sql, [data, fieldIdId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Update success!" });
    });
  },
  updateAuthor: (req, res) => {
    console.log("=======");
    let data = req.body;
    let authorId = req.params.authorId;
    let sql = "UPDATE author SET ? WHERE id = ?";
    db.query(sql, [data, authorId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Update success!" });
    });
  },
  updatePublish: (req, res) => {
    console.log("=======");
    let data = req.body;
    let publishId = req.params.publishId;
    let sql = "UPDATE publish SET ? WHERE id = ?";
    db.query(sql, [data, publishId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Update success!" });
    });
  },
  updateSupplier: (req, res) => {
    console.log("=======");
    let data = req.body;
    let supplierId = req.params.supplierId;
    let sql = "UPDATE supplier SET ? WHERE id = ?";
    db.query(sql, [data, supplierId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Update success!" });
    });
  },
  // store: (req, res) => {
  //   let data = req.body;

  //   console.log(data.password);
  //   const hash = bcrypt.hashSync(data.password, saltRounds);
  //   console.log(hash);
  //   data.password = hash;

  //   let sql = "INSERT INTO users SET ?";
  //   db.query(sql, [data], (error, response) => {
  //     if (error) {
  //       throw error;
  //     }
  //     res.json({ message: "Insert success." });
  //   });
  // },
  storeField: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO field SET ?";
    db.query(sql, [data], (error, response) => {
      if (error) {
        throw error;
      }
      res.json({ message: "Insert success." });
    });
  },
  storeAuthor: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO author SET ?";
    db.query(sql, [data], (error, response) => {
      if (error) {
        throw error;
      }
      res.json({ message: "Insert success." });
    });
  },
  storePublish: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO publish SET ?";
    db.query(sql, [data], (error, response) => {
      if (error) {
        throw error;
      }
      res.json({ message: "Insert success." });
    });
  },
  storeSupplier: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO supplier SET ?";
    db.query(sql, [data], (error, response) => {
      if (error) {
        throw error;
      }
      res.json({ message: "Insert success." });
    });
  },
  // delete: (req, res) => {
  //   console.log("=======");
  //   let sql = "DELETE FROM users WHERE id = ?";
  //   db.query(sql, [req.params.usersId], (err, response) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.json({ message: "Delete success!" });
  //   });
  // },
  deleteField: (req, res) => {
    console.log("=======");
    let sql = "DELETE FROM field WHERE id = ?";
    db.query(sql, [req.params.fieldId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Delete success!" });
    });
  },
  deleteAuthor: (req, res) => {
    console.log("=======");
    let sql = "DELETE FROM author WHERE id = ?";
    db.query(sql, [req.params.authorId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Delete success!" });
    });
  },
  deletePublish: (req, res) => {
    console.log("=======");
    let sql = "DELETE FROM publish WHERE id = ?";
    db.query(sql, [req.params.publishId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Delete success!" });
    });
  },
  deleteSupplier: (req, res) => {
    console.log("=======");
    let sql = "DELETE FROM supplier WHERE id = ?";
    db.query(sql, [req.params.supplierId], (err, response) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Delete success!" });
    });
  },
  login: (req, res) => {
    console.log("==========================");
    console.log(req.body);
    let sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, response) => {
      if (err) throw err;
      const check = bcrypt.compareSync(req.body.password, response[0].password);
      // console.log(response[0].password)
      // console.log(req.body.password)
      console.log(check);
      if (check) {
        var token = jwt.sign({ email: req.body.email }, passEmail);

        res.json({
          token: token,
          message: "login successfull.",
          code: {
            status: 200,
            text: "OK, Đã đăng nhập thành công, token đã lưu vào LocalStorage.",
          },
        })
        
      } else {
        res.json({
          message: "Không tìm thấy user.",
          code: {
            status: 202,
            text: "No, Đăng nhập thất bại, vui lòng thử lại.",
          },
        });
      }
    });
  },

};
