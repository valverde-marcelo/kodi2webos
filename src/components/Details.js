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

export function Ratings({ className, value }) {

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

    return (<div className={className}>{content}</div>);
}

export function Director({ className, value }) {

    if (value && Array.isArray(value)) {
        let content = `Director: ${value.join(", ")}`;
        return (<div className={className}>{content}</div>);
    }

    return ("");
}

export function Writer({ className, value }) {

    if (value && Array.isArray(value)) {
        let content = `Writer: ${value.join(", ")}`;
        return (<div className={className}>{content}</div>);
    }

    return ("");
}

export function Duration({ className, value }) {
    let content = "";
    let video = [];

    if (value) {
        if (value.video && value.video.length > 0) {
            for (let i in value.video) {
                video.push(`${(value.video[i].duration / 60).toFixed()}min`);
            }
        }
        content = video.join(" - ");
    }
    return (<span className={className}>{content}</span>);
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

function Details(props) {
    logger(props);
    const item = props.item;
    return (
        <div>
            <div><span className={css.content}>{item.title}</span></div>
            <div><span className={css.content}>{item.tagline}</span></div>
            <div><span className={css.content}>({item.originaltitle})</span></div>
            <div><span className={css.content}>{item.year} - {item.mpaa} - <Duration className={css.content} value={item.streamdetails} /></span></div>
            <div><span className={css.content}>{utils.maxChar(item.plot, 400)}</span></div>
        </div>
    );
}



export default Details;