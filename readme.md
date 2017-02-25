# MarkDown Web Reader
**mdwebreader** is a dead simple tool to preview a full proyect written in markdown (and simple text) in your browser. You can now write docs in markdown in multiple files and preview your full proyect either offline or served in a web server.

## Instructions

1. Dependences
    * We will need tree command. For OSX:

        > brew install tree

1. Download this repository

    > git clone https://github.com/jaimehrubiks/mdwebreader.git myproject && cd myproject

1. Deploy your proyect markdown files in the 'docs' (or any other) directory, or copy these files into your proyect root.

    > mv /path/proyectDir ./docs

1. Update index (each time tree changes)

    > **cd ./docs**

    > **tree -CH ./docs > ../tree.html**

1. Preview: Click on index.html file or serve all in a webserver.

## Notes
1. By default, docs/readme.md file will be loaded if exists.
If you choose not to name your project folder 'docs' but still load a default file, just edit index.html and find and replace 'docs' word by the one of your own
2. Note that tree command is executed from inside the proyect folder and with it's name as an argument. You may want to use:

    > cd docs && tree -CH ./docs > ../tree.html && cd ../

3. I have not tested **tree** in Linux yet. All feedback is appreciated.

## Preview
![Preview](http://i.imgur.com/betdujA.png)
