const mongoose=require('mongoose');

const DB='mongodb+srv://Anchal:Anchal29@cluster0.0rf0fse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB,{
    useNewUrlParser: true,
      useUnifiedTopology: true
}).then(()=>{
    console.log('connection successful');
}).catch(_=>{
    console.log('Failed to connect'+_);
})