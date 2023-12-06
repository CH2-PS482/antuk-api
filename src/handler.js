/// ! TO DO LIST
// komentar biasa

const { nanoid } = require('nanoid'); // generete id for history and profile
const { users, history } = require('./data')

const login = (request, h) => {
    const { phoneNumber, password } = request.payload;

    // ! authentication (benerin)
    const isSuccess = users.find(u => u.phoneNumber === phoneNumber && u.password === password);
    if (isSuccess) {
        const response = h.response({
            status: 'sucess',
            message: 'Berhasil masuk'
            });
        response.code(200);
        return response;

        }
    const response = h.response({
        status: 'fail',
        message: 'Gagal masuk. Nomor telepon atau password salah'
    });
    response.code(400);
    return response;
};

const createAccount = (request, h) => {
    const { fullName, phoneNumber, password } = request.payload; 
    // ! hash (bcrypt)
    // ! confirm password
    // ! masukin ke db
    // ! validasi input
    // !

    // Validasi data
    if (!fullName || fullName === '' ) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal membuat akun. Pastikan mengisi nama lengkap dengan benar',
            });
        response.code(400);
        return response;
    }
    if (!phoneNumber || phoneNumber === '') {
        const response = h.response({
            status: 'fail',
            message: 'Gagal membuat akun. Pastikan mengisi nomor telepon dengan benar',
        });
        response.code(400);
        return response;
    }

      const usersId = nanoid(8);


    const newUser = { fullName, phoneNumber, password, usersId };
    users.push(newUser);

    // Memastukan newUser masuk ke dalam array
    const isSuccess = users.filter((user) => user.usersId === users.Id).length > 0;
 
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Akun berhasil dibuat',
            data: {
                userId,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal membuat akun',
    });
    response.code(500);
    return response;
};

const editProfile = (request, h) => {
    const {fullName, phoneNumber} = request.payload;

    if (!fullName || fullName === '') {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui profil. Pastikan mengisi nama lengkap dengan benar',
        });
        response.code(400);
        return response;
    } else if (!phoneNumber || phoneNumber === '') {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui profil. Pastikan mengisi nomor telepon dengan benar',
        });
        response.code(400);
        return response;
    }
    const response = h.response({
        status: 'success',
        message: 'Profil berhasil diperbarui',
    });
    response.code(201);
    return response;
};

// if detected
const storeToHistory = (request, h) => {
    const { duration, totalWarnings } = request.payload; // ! auto generate tp bingung gmn generatenya

    const historyId = nanoid(10);
    const date = new Date();

    const newHistory = {
        duration, totalWarnings, historyId, date,
    };
    history.push(newHistory);

    const isSuccess = history.find((hist) => hist.historyId === historyId).length > 0;


    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Riwayat berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
    response.code(201);
    return response;
    }
     const response = h.response({
        status: 'fail',
        message: 'Riwayat gagal ditambahkan',
    });
    response.code(500);
    return response;
};

// ! bingung
const viewAllHistory = () => ({
    // jika data history kosong

    // jika data ada
});


module.exports = { createAccount, login, viewAllHistory, editProfile, storeToHistory };