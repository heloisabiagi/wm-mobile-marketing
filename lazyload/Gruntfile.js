/*global module:false*/
module.exports = function(grunt) {

  // Configuração.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8070,
          hostname: "localhost",
          keepalive: true
        }
      }
    }
  });

  // Carrega plugins
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Tarefa default
  grunt.registerTask("default", ["connect"]);

};
