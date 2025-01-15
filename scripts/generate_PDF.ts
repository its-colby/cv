import { roles } from '../src/lib/ui/industry/data';
import * as fs from 'fs';
import markdownpdf from 'markdown-pdf';
import path from 'path';

const args = process.argv.slice(2);
const outputIndex = args.indexOf('--output');
const outputDir = outputIndex !== -1 ? args[outputIndex + 1] : '.';

const mdPath = path.join(outputDir, 'cv.md');
const pdfPath = path.join(outputDir, 'cv.pdf');


function generateMarkdown(): string {
    let markdown = '# Professional Experience\n\n';
    
    roles.forEach(role => {
        markdown += `## ${role.title} at ${role.company}\n`;
        markdown += `*${role.time} | ${role.contract} | ${role.length}*\n\n`;
        
        markdown += `### Responsibilities\n`;
        markdown += `${role.responsibilities}\n\n`;
        
        markdown += `### Impact\n`;
        markdown += `${role.impact}\n\n`;
        
        markdown += `### Key Contributions\n`;
        markdown += role.contributions.map(c => `- ${c}`).join('\n');
        markdown += '\n\n---\n\n';
    });
    
    return markdown;
}

// Generate markdown and save to file
const markdown = generateMarkdown();
fs.writeFileSync(mdPath, markdown);

// Convert markdown to PDF
markdownpdf()
    .from(mdPath)
    .to(pdfPath, () => {
        console.log('PDF generated successfully!');
        // Optionally remove the temporary markdown file
        fs.unlinkSync(mdPath);
    });