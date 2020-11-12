import { TextDecoder } from 'util';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('cd-demo-ext.showVersion', async () => {
		const packageJSON = JSON.parse(new TextDecoder().decode(await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extensionUri, 'package.json'))));
		vscode.window.showInformationMessage(`Hello World from ${packageJSON.displayName} (${packageJSON.name}) version ${packageJSON.version}!`);
	}));
}

export function deactivate() { }
