import * as BookModel from '../models/BookModel.js';

export const fetchBooks = async (req, res) => {
    try{
        const book = await BookModel.getBooks();
        res.status(200).json({success: true, message: book});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}