import { industry_roles, teaching_roles, research_roles, about_me, AboutMeKind, professional_breaks, Month, graduations, enrollments, gap_years, Graduation, Enrollment, GapYear, courses } from '../src/lib/cv';
import * as fs from 'fs';
import markdownpdf from 'markdown-pdf';
import path from 'path';

const args = process.argv.slice(2);
const outputIndex = args.indexOf('--output');
const outputDir = outputIndex !== -1 ? args[outputIndex + 1] : '.';

const mdPath = path.join(outputDir, 'colby-anderson.cv.md');
const pdfPath = path.join(outputDir, 'colby-anderson.cv.pdf');


function generateMarkdown(): string {
    let markdown = 'Please see https://itscolby.com/cv for the most detailed version of my CV.\n\n';

    // About Me section
    markdown += '# About Me\n';
    markdown += about_me.filter(r => r.kind === AboutMeKind.PROFESSIONAL).map(r => r.text).join('\n');
    markdown += '\n\n\n';

    // Education section
    markdown += '# Education\n\n';
    // Combine graduations and enrollments, sort by date
    const educationEvents = [...graduations, ...enrollments, ...gap_years];
    educationEvents.sort((a, b) => a.date.start_year - b.date.start_year);
    
    educationEvents.forEach((event, index) => {
        if (event instanceof Graduation) {
            markdown += `${index + 1}. Graduated | ${event.degree} in ${event.field} at ${event.institution} | ${event.date.start_year}\n`;
        } else if (event instanceof Enrollment) {
            markdown += `${index + 1}. Enrolled | ${event.degree} in ${event.field} at ${event.institution} | ${event.date.start_year}\n`;
        } else if (event instanceof GapYear) {
            markdown += `${index + 1}. Gap Year | ${event.date.start_year}\n`;
        }
    });
    markdown += '\n\n';

    markdown += '# Industry Experience\n\n';
    
    industry_roles.forEach(role => {
        const date_range = role.date.start_year === role.date.end_year ? role.date.start_year : `${role.date.start_year} - ${role.date.end_year || 'Present'}`;
        markdown += `## ${role.title} at ${role.company}\n`;
        markdown += `*${role.commitment} | ${date_range} | ${role.date.duration}*\n\n`;

        const bullets = [role.impact, ...(role.contributions || [])].filter(Boolean);
        markdown += bullets.map(c => `- ${c}`).join('\n');
        markdown += '\n\n---\n\n';
    });

    markdown += '# Academia Experience\n\n';
    markdown += '## Teaching\n\n';
    
    
    teaching_roles.forEach(role => {
        markdown += `- ${role.date.start_year} ${role.date.season} | ${role.title}\n`;
    });
    markdown += '\n---\n\n';

    markdown += '## Research\n\n';
    
    research_roles.forEach(role => {

        const date_range = role.date.season ? role.date.start_year + ' ' + role.date.season : role.date.start_year === role.date.end_year ? role.date.start_year : `${role.date.start_year} - ${role.date.end_year || 'Present'}`;

        markdown += `- ${date_range} | ${role.title}\n`;
    });
    markdown += '\n---\n\n';

    markdown += '## Relevant Coursework\n\n';

    courses.reverse().forEach(course => {
        const expected = course.date.start_year > new Date().getFullYear() ? ' (Expected)' : '';
        markdown += `- ${expected} ${course.date.start_year} ${course.date.season} | ${course.title}\n`;
    });

    markdown += '# Personal Projects\n\n';

    professional_breaks.forEach(project => {
        markdown += `## ${project.title}\n\n`;
        const date_range = project.date.start_year === project.date.end_year ? project.date.start_year : `${project.date.start_year} - ${project.date.end_year || 'Present'}`;
        markdown += `*${project.commitment} | ${date_range} | ${project.date.duration}*\n\n`;
        
        if (project.contributions && project.contributions.length > 0) {
            markdown += project.contributions.map(c => `- ${c}`).join('\n');
            markdown += '\n\n';
        }
        
        markdown += '---\n\n';
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