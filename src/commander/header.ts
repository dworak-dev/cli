/**
 * @file src/commander/header.ts
 * @author dworac <mail@dworac.com>
 *
 *     Header for the CLI.
 */
import chalk from "chalk";

const v = `v2.10.2`; // x-release-please-version

const header = `██████╗ ██╗    ██╗ ██████╗ ██████╗  █████╗  ██████╗
██╔══██╗██║    ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝
██║  ██║██║ █╗ ██║██║   ██║██████╔╝███████║██║
██║  ██║██║███╗██║██║   ██║██╔══██╗██╔══██║██║     
██████╔╝╚███╔███╔╝╚██████╔╝██║  ██║██║  ██║╚██████╗
╚═════╝  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝
    
    ${chalk.green(v)} - ${chalk.blue("dworac CLI is a collection of tools")}
    ${chalk.blue("to help you build amazing projects.")}`;

export default header;
