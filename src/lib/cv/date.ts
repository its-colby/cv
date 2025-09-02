export enum Season {
    SPRING = "Spring",
    SUMMER = "Summer",
    FALL = "Fall",
    WINTER = "Winter",
}

export enum Month {
    JANUARY = "January",
    FEBRUARY = "February",
    MARCH = "March",
    APRIL = "April",
    MAY = "May",
    JUNE = "June",
    JULY = "July",
    AUGUST = "August",
    SEPTEMBER = "September",
    OCTOBER = "October",
    NOVEMBER = "November",
    DECEMBER = "December",
}

export interface YearPeriod {
    start_year: number;
    end_year?: number;
}

export interface MonthPeriod {
    start_month: Month;
    end_month?: Month;
}

export interface SeasonPeriod {
    season: Season;
}

export type DateParams = YearPeriod & (MonthPeriod | SeasonPeriod);


export class Date {
    public readonly start_year: number;
    public readonly end_year: number;
    public readonly start_month: Month;
    public readonly end_month: Month;
    public readonly season?: Season;

    constructor(params: DateParams) {
        this.start_year = params.start_year;
        this.end_year = params.end_year || params.start_year;
        
        if ('season' in params) {
            this.season = params.season;
            [this.start_month, this.end_month] = Date.season_to_period(this.season);
        } else {
            this.start_month = params.start_month;
            this.end_month = params.end_month || params.start_month;
            this.season = undefined;
        }
    }

    static season_to_period(season: Season | undefined): [Month, Month] {
        switch (season) {
            case Season.SPRING : return [Month.JANUARY, Month.APRIL];
            case Season.SUMMER : return [Month.MAY, Month.AUGUST];
            case Season.FALL : return [Month.SEPTEMBER, Month.DECEMBER];
            case Season.WINTER : return [Month.DECEMBER, Month.JANUARY];
            default : return [Month.JANUARY, Month.DECEMBER];
        }
    }

    get start(): string {
        return `${this.start_month} ${this.start_year}`;
    }

    get duration(): string {
        if (this.season) {
            return this.season + ' semester';
        }

        const monthToNum = (month: Month) => Object.values(Month).indexOf(month);
        
        const totalMonths = (this.end_year * 12 + monthToNum(this.end_month)) - 
                          (this.start_year * 12 + monthToNum(this.start_month)) + 1;
        
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        
        const parts = [
            years > 0 ? `${years} year${years === 1 ? '' : 's'}` : '',
            months > 0 ? `${months} month${months === 1 ? '' : 's'}` : ''
        ].filter(Boolean);
        
        return parts.length === 2 ? parts.join(' and ') : parts[0] || '0 months';
    }

}


export const seasons = {
    fall2019: new Date({ start_year: 2019, season: Season.FALL }),

    spring2020: new Date({ start_year: 2020, season: Season.SPRING }),
    fall2020: new Date({ start_year: 2020, season: Season.FALL }),

    spring2021: new Date({ start_year: 2021, season: Season.SPRING }),
    summer2021: new Date({ start_year: 2021, season: Season.SUMMER }),
    fall2021: new Date({ start_year: 2021, season: Season.FALL }),

    spring2022: new Date({ start_year: 2022, season: Season.SPRING }),
    fall2022: new Date({ start_year: 2022, season: Season.FALL }),

    spring2023: new Date({ start_year: 2023, season: Season.SPRING }),
    fall2023: new Date({ start_year: 2023, season: Season.FALL }),

    spring2024: new Date({ start_year: 2024, season: Season.SPRING }),
}
