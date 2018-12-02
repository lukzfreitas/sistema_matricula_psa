var mongoDb         = require('mongodb');
var mongoClient     = mongoDb.MongoClient;
var dbname          = 'sistema_matriculas';
var collectionName  = 'Turmas';
var url             = 'mongodb://localhost:27017/'+dbname;
var filename        = 'psa_turmas.csv';
console.log('***************Process started');

mongoClient.connect(url,function(err,db){
    if(err){
        console.log('error on connection '+err);
    }
    else{
        console.log('***************Successfully connected to mongodb');
        var collection  = db.collection(collectionName);
        var fs          = require('fs');
        var readline    = require('readline');
        var stream      = require('stream');
        var instream    = fs.createReadStream(filename);
        var outstream   = new stream;
        var rl          = readline.createInterface(instream,outstream);

        console.log('***************Parsing, please wait ...');
        
        rl.on('line',function(line){
            try{
                var arr         = line.split(',');
                var object   = {};
                //Parse them here
                //Example
                object['codCred'] = arr[0]; //Just an example
                object['nomeDisciplina'] = arr[1]; //Just an example                
                object['numeroTurma'] = parseInt(arr[2]); //Just an example                
                object['vagas'] = parseInt(arr[3]); //Just an example               
                object['vagasDisponiveis'] = parseInt(arr[3]); //Just an example               
                object['horario'] = arr[4]; //Just an example                
                var res = collection.insert(object);
            }
            catch (err){
                console.log(err);
            }
        });

        rl.on('close',function(){
            db.close();
            console.log('***************completed');
        });
    }
});