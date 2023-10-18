import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth";
import { getProducts, createProduct, updateProduct, delProduct, getProductByID, getProductwithPk, getUserProducts, editProduct, getShopManagerProducts } from '../../controller/productController';
import multer from 'multer';
import { storage } from '../../middleware/imageuploader/imageuploader';

const upload = multer({ storage: storage });

const router = AsyncRouter();

router.get('/getProduct', getProducts)
router.post('/createProduct', withAuth, upload.array('pictures', 10), createProduct);
router.put('/updateProduct', withAuth, upload.array('pictures', 10), updateProduct);
router.get('/getProductByID/:id', getProductByID)
router.get('/getProductwithPk/:id', getProductwithPk)
router.delete('/deleteProduct', withAuth, delProduct);
router.get('/getUserProducts/:id', getUserProducts);
router.put('/editProduct/:id', upload.single('pictures'), editProduct);
router.get('/getShopManagerProducts/:id', getShopManagerProducts)

export default router;