/*
 * File: Details.js
 * Project: kodi2webos
 * File Created: Tuesday, 2nd June 2020 7:39:57 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:38 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import React from 'react';
import css from './Details.module.less';
import utils from '../utils/utils';
import debug from '../utils/debug';

const logger = debug('components:details');

export function Ratings({ value }) {

    let content = "";
    let ratings = [];

    if (value) {
        if (value.imdb && value.imdb.rating) {
            ratings.push(`IMDB ${value.imdb.rating.toFixed(2)}`);
        }
        if (value.themoviedb && value.themoviedb.rating) {
            ratings.push(`TMDB ${value.themoviedb.rating.toFixed(2)}`);
        }
    }
    content = ratings.join(" / ");

    return (<div className={css.director}>{content}</div>);
}

export function Director({ value }) {
    let content = null;
    if (value) {
        if (value.length > 0) {
            content = `Director: ${value.join(", ")}`;
            content = <div className={css.director}>{content}</div>;
        }
    }

    return content;
}

export function Cast({ value }) {
    let content = null;
    let cast = []
    if (value) {
        if (value.length > 0) {
            for (let i = 0; i < 5; i++) {
                if (value[i]) {
                    cast.push((value[i].name));
                }
            }
            content = `Cast: ${cast.join(", ")}`;
            content = <div className={css.cast}>{content}</div>;
        }
    }

    return content;
}

export function Genre({ value }) {
    logger(value);
    let content = null;
    if (value && Array.isArray(value)) {
        content = `${value.join(", ")}`;
        content = <div className={css.genre}>{content}</div>;
    }

    return content;
}

export function Writer({ className, value }) {
    let content = null;

    if (value && Array.isArray(value)) {
        content = `Writer: ${value.join(", ")}`;
        content = <div className={className}>{content}</div>;
    }

    return content;
}

export function Duration({ className, value }) {
    let content = null;
    let video = [];

    if (value) {
        if (value.video && value.video.length > 0) {
            for (let i in value.video) {
                video.push(`${(value.video[i].duration / 60).toFixed()}min`);
            }
            content = video.join(" - ");
            content = <span className={className}>{content}</span>;
        }
    }

    return content;
}

export function StreamVideoDetails({ className, value }) {
    let content = "";
    let video = [];
    let vh = null;
    let resolution = null;

    if (value) {
        if (value.video && value.video.length > 0) {
            for (let i in value.video) {
                video.push(`Video Codec: ${value.video[i].codec}`);
                video.push(`Duration: ${(value.video[i].duration / 60).toFixed()}min`);

                if (value.video[i].height) {
                    vh = value.video[i].height;
                    if (vh <= 480) {
                        resolution = "SD";
                    } else if (vh <= 720) {
                        resolution = "HD";
                    } else if (vh <= 1080) {
                        resolution = "Full HD";
                    } else if (vh <= 2160) {
                        resolution = "4K";
                    } else if (vh <= 4320) {
                        resolution = "8K";
                    }
                    if (resolution) {
                        video.push(resolution);
                    }
                }
            }
        }
        content = video.join(" - ");
    }
    return (<div className={className}>{content}</div>);
}

export function StreamVideoResolution({ className, value }) {
    let content = null;
    let vh = null;
    let resolution = null;

    if (value) {
        if (value.video && value.video.length > 0) {
            if (value.video[0].height) {
                vh = value.video[0].height;
                if (vh <= 480) {
                    resolution = "SD";
                } else if (vh <= 720) {
                    resolution = "HD";
                } else if (vh <= 1080) {
                    resolution = "Full HD";
                } else if (vh <= 2160) {
                    resolution = "4K";
                } else if (vh <= 4320) {
                    resolution = "8K";
                }
                if (resolution) {
                    content = <span className={className}>{resolution}</span>;
                }
            }
        }
    }
    return content;
}

export function StreamAudioDetails({ className, value }) {
    let audio = [];
    let content = "";

    if (value) {
        if (value.audio && value.audio.length > 0) {
            for (let i in value.audio) {
                var valueToPush = new Array(); // or "var valueToPush = new Object();" which is the same
                valueToPush[0] = `Audio Codec: ${value.audio[i].codec}`;
                valueToPush[1] = `Channels: ${value.audio[i].channels}`;
                valueToPush[2] = `Language: ${value.audio[i].language}`;
                audio.push(valueToPush.join(" - "));
            }
        }
        content = audio.join(" / ");
    }

    return (<div className={className}>{content}</div>);
}

export function StreamSubsDetails({ className, value }) {
    let content = "";

    if (value) {
        if (value.subtitle && value.subtitle.length > 0) {
            for (let i in value.subtitle) {
                if (value.subtitle[i].language !== "") {
                    content = content + value.subtitle[i].language;
                }
            }
        }
        if (content !== "") {
            content = "Subs: " + content;
        }
    }

    return (<div className={className}>{content}</div>);
}

export function Tagline({ value }) {
    let content = null;

    if (value) {
        content = <span className={css.tagline}>{value}</span>;
    }

    return content;
}

export function OriginalTitle({ className, value }) {
    let content = null;

    if (value) {
        content = <span className={className}>({value})</span>;
    }

    return content;
}

export function Year({ className, value }) {
    let content = null;

    if (value) {
        content = <span className={className}>{value}</span>;
    }

    return content;
}

/*
"Rated", "Rated G",   "Rated PG", "Rated R", "Rated PG-13"
*/
export function Mpaa({ className, value }) {
    let content = null;
    let rated = "";

    if (value) {
        if (value === "Rated") {
            value = "R";
        }

        value = value.replace("Rated ", "");

        content = <span className={className}>{value}</span>;
    }

    return content;
}

export function Title({ value }) {
    let content = null;

    if (value) {
        content = <span className={css.title}>{value}<br /></span>;
    }

    return content;
}

export function Plot({ value }) {
    let content = null;

    if (value) {
        content = <span className={css.plot}>{value}<br /></span>;
    }

    return content;
}

export function LineDetails({ value: item }) {

    return (<div><Year className={css.year} value={item.year} />
        <Mpaa className={css.mpaa} value={item.mpaa} />
        <Duration className={css.duration} value={item.streamdetails} />
        <StreamVideoResolution className={css.resolution} value={item.streamdetails} />
        <br />
    </div>);
}

function Details(props) {
    logger(props);
    const item = props.item;
    return (
        <div>
            <div><Title value={item.title} /></div>
            <div><LineDetails value={item} /></div>
            <div><Tagline value={item.tagline} /></div>
        </div>
    );
}



export default Details;

/*
<div><span className={css.title}>{item.title}</span></div>
<div><span className={css.content}>{item.tagline}</span></div>
<div><span className={css.content}>({item.originaltitle})</span></div>
<div><span className={css.content}>{item.year} - {item.mpaa} - <Duration className={css.content} value={item.streamdetails} /></span></div>
<div><span className={css.content}>{utils.maxChar(item.plot, 400)}</span></div>
*/

