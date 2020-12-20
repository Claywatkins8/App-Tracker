const { FilePond } = require("filepond");

console.log("filepond link")

FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)



FilePond.parse(document.body);
