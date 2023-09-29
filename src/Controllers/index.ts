/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv'; // Import dotenv
import OpenAI from "openai";

// Load environment variables from the project's .env file
const projectRoot = vscode.workspace.rootPath;
const envFilePath = projectRoot ? path.join(projectRoot, '.env') : undefined;
dotenv.config({ path: envFilePath });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


// Define a function to handle file selection
async function pickAndReadFile() {
	try {
	  const fileUris = await vscode.window.showOpenDialog({
		canSelectFiles: true,
		canSelectFolders: false,
		canSelectMany: false,
		filters: {
		  // You can define file filters if needed
		  'allFiles': ['*'],
		  'textFiles': ['txt', 'json', 'js', 'ts', 'yaml', 'yml'],
		},
	  });
  
	  if (fileUris && fileUris.length > 0) {
		const filePath = fileUris[0].fsPath;
  
		// Read the content of the selected file
		fs.readFile(filePath, 'utf8', (err, data) => {
		  if (err) {
			vscode.window.showErrorMessage('Error reading file: ' + err.message);
			return;
		  }
  
		  // Handle the file content here
		  console.log('File Content:', data);
          vscode.window.showInformationMessage('File(s) selected successfully!');
		  generateOpenAPISpecification("Generate openapi: 3.0.0 specification file format(MUST follow the .yaml structure) with the code provided(just go straight forward and provide me the code). Servers ['https://geek-quote-api.vercel.app', 'https://localhost:8080']. should have api version set to 1.0.1: " + data);


		});
	  } else {
		vscode.window.showInformationMessage('No file selected.');
        
	  }
	} catch (error: any) {
	  vscode.window.showErrorMessage('Error picking a file: ' + error.message);
	}
}


// Function to generate an OpenAPI specification
async function generateOpenAPISpecification(prompt: string) {
    try {
		const completion = await openai.completions.create({
			model: "gpt-3.5-turbo-instruct",
			prompt: prompt,
			max_tokens: 2097,
		  });
		
		// Handle the response from OpenAI
		const generatedContent = completion.choices[0].text; // Extract the generated content
		console.log('Generated OpenAPI Specification:', generatedContent);

		// save output
		// Get the current workspace directory
		const currentWorkspace = vscode.workspace.workspaceFolders?.[0];
		
		if (!currentWorkspace) {
		throw new Error('No workspace folder found.');
		}

		// Define the output file path (in the current directory with a .yaml extension)
		const outputFilePath = path.join(currentWorkspace.uri.fsPath, 'openapi-spec.yaml');
		// Save the generated content to a .yaml file
		fs.writeFileSync(outputFilePath, generatedContent, 'utf8');

		// when everything is done
		vscode.window.showInformationMessage('OpenAPI specification generated and saved in openapi-spec.yaml file!');


    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      throw error; // You can handle this error in your code
    }
  }

export { pickAndReadFile };
