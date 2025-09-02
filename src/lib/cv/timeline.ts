import { graduations, enrollments } from "./degrees";
import { gap_years, professional_breaks } from "./misc";
import { research_roles } from "./research";
import { industry_roles } from "./industry";
import { teaching_roles } from "./teaching";
import { courses } from "./courses";
import { Event } from "./event";
import { Month } from "./date";

const all = [
    ...graduations, 
    ...enrollments, 
    ...gap_years, 
    ...professional_breaks, 
    ...research_roles, 
    ...industry_roles, 
    ...teaching_roles,
    ...courses
];

export interface YearTimeline {
    year: number;
    events: Event[];
}

// Group events by year, sorted by start date descending
export const timeline_by_year: YearTimeline[] = (() => {
    const yearMap = new Map<number, Event[]>();
    
    // Group events by their start year
    for (const event of all) {
        const startYear = event.date.start_year;
        
        if (!yearMap.has(startYear)) {
            yearMap.set(startYear, []);
        }
        yearMap.get(startYear)!.push(event);
    }
    
    // Convert to array and sort by year (descending)
    return Array.from(yearMap.entries())
        .map(([year, events]) => ({
            year,
            events: events.sort((a, b) => {
                const monthToNum = (month: Month) => Object.values(Month).indexOf(month);
                // Sort by start month descending within the year
                return monthToNum(b.date.start_month) - monthToNum(a.date.start_month);
            })
        }))
        .sort((a, b) => b.year - a.year); // Sort years in descending order
})();