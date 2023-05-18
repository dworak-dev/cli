/**
 * @file src/commander/header.ts
 * @author dworac <mail@dworac.com>
 *
 *     Header for the CLI.
 */
import chalk from "chalk";

const header = `██████╗ ██╗    ██╗ ██████╗ ██████╗  █████╗  ██████╗
██╔══██╗██║    ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝
██║  ██║██║ █╗ ██║██║   ██║██████╔╝███████║██║
██║  ██║██║███╗██║██║   ██║██╔══██╗██╔══██║██║     
██████╔╝╚███╔███╔╝╚██████╔╝██║  ██║██║  ██║╚██████╗
╚═════╝  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝
    
    ${chalk.blue("dworac CLI is a collection of tools")}
    ${chalk.blue("to help you build amazing projects.")}`;

export default header;
