import { industry_roles, teaching_roles, research_roles } from '../src/lib/info';
import * as fs from 'fs';
import markdownpdf from 'markdown-pdf';
import path from 'path';

const args = process.argv.slice(2);
const outputIndex = args.indexOf('--output');
const outputDir = outputIndex !== -1 ? args[outputIndex + 1] : '.';

const mdPath = path.join(outputDir, 'cv.md');
const pdfPath = path.join(outputDir, 'colby_anderson.cv.pdf');


function generateMarkdown(): string {
    let markdown = 'Please see https://cv.itscolby.com for the most detailed version of Colby Anderson\'s CV.\n\n';


    markdown += '# Industry Experience\n\n';
    
    industry_roles.forEach(role => {
        markdown += `## ${role.title} at ${role.company}\n`;
        markdown += `*${role.commitment} | ${role.date} | ${role.duration}*\n\n`;

        const bullets = [role.impact, ...role.contributions];
        markdown += bullets.map(c => `- ${c}`).join('\n');
        markdown += '\n\n---\n\n';
    });

    markdown += '# Academia Experience\n\n';
    markdown += '## Teaching\n\n';
    markdown += teaching_roles.map(r => `- ${r.date}: ${r.title}`).join('\n');
    markdown += '\n\n---\n\n';

    markdown += '## Research\n\n';
    markdown += research_roles.map(r => `- ${r.date}: ${r.title}`).join('\n');
    markdown += '\n\n---\n\n';
    
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