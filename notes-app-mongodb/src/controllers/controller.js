const {Router } = require ('express');
const router = Router();

router.get('/', (req,res) => {
    res.sendFile(__dirname , '/main.html')
});

router.get('/about', (req,res) => {
    res.sendFile(__dirname , '/about.html')
});

module.exports = router;