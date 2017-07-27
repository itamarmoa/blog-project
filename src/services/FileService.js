let $ = require("jquery");

class FileService {
  fetchExternalHTML(fileName) {
    return $.get('/'+fileName)
  }
}

export default FileService = new FileService;
