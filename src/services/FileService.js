let $ = require("jquery");

class FileService {
  fetchExternalFile(fileName) {
    return $.get('/'+fileName)
  }
}

export default FileService = new FileService;
