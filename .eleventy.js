module.exports = function(config){
    config.setBrowserSyncConfig(
         {
             https:{
                 key: 'C:\\tools\\Ruby27-x64\\msys64\\etc\\localhost.key',
                 cert: 'C:\\tools\\Ruby27-x64\\msys64\\etc\\localhost.crt'
             }
         }
    )
    config.addPassthroughCopy("src/js");
    return{
        dir:{
            input: 'src',
            output: 'dist'
        }
    };
};