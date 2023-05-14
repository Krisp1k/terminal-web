type CommandType = {
    name: string;
    heading: string;
    content: string;
    usage?: string
}

const commands: CommandType[] = [
    {
        name: "cd", 
        heading: "Navigates to a web page", 
        content: "",
        usage: "cd [page]"
    },
    {
        name: "help", 
        heading: "Shows all available commands", 
        content: `
            help -> Shows all available commands
            cd -> Navigates to a web page
            pages -> Shows all available pages`,
        usage: "help"
    },
    {
        name: "pages", 
        heading: "Shows all available pages", 
        content: `
            home
            about
            contact`,
        usage: "pages"
    },
]

export default commands 