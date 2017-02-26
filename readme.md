# MarkDown Web Reader
**mdwebreader** is a dead simple tool to preview a full project written in markdown (and simple text) in your browser. You can now write docs in markdown in multiple files and preview your full project either offline or served in a web server.
**Important Note:** Google chrome will not work in offline mode since it is not allowed to request local files for security reasons. Best solution is to use a browser that allowes it (safari) or serve a tiny web server.

## Instructions

1. Dependences
    * We will need tree command. For OSX:

        > brew install tree

1. Download this repository

    > git clone https://github.com/jaimehrubiks/mdwebreader.git myproject && cd myproject

1. Deploy your project markdown files in the 'docs' (or any other) directory, or copy these files into your project root.

    > mv /path/projectDir ./docs

1. Update index (each time tree changes)

    > **cd ./docs**

    > **tree -CH ./docs > ../tree.html**

1. Preview: Click on index.html file or serve all in a webserver.

    An example of local webserver:

    > npm install -g http-server

    > http-server ./
    

## Notes
1. By default, docs/readme.md file will be loaded if exists.
If you choose not to name your project folder 'docs' but still load a default file, just edit index.html and find and replace 'docs' word by the one of your own
2. Note that tree command is executed from inside the project folder and with it's name as an argument. You may want to use:

    > cd docs && tree -CH ./docs > ../tree.html && cd ../

3. I have not tested **tree** in Linux yet. All feedback is appreciated.

## Preview
![Preview](http://i.imgur.com/betdujA.png)
