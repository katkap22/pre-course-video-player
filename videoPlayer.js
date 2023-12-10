let titlePlayLists = {
    title1: "Music Videos",
    title2: "Online training sports",
}

let videoPlayList1 = {
    title: titlePlayLists.title1,
    videoTracks: [
        {
            // coverVideo: './assets/images/coverVideo.png',
            fileUrl: './assets/videos/videoplayback.mp4',
            description: 'The Kolors - Italodisco',
            album: 'Dance music',
            isLiveStream: true,
        },
        {
            fileUrl: './assets/videos/3D-JungKook&JackHarlow.m4v',
            description: 'Jung Kook & Jack Harlow',
            album: 'Dance music',
            isLiveStream: true,
        }

    ],
}

//render

let titleVideoPlayerElement = document.createElement('h1');
titleVideoPlayerElement.append('My Playlists');
document.body.append(titleVideoPlayerElement);

renderVideoPlayList(videoPlayList1);

function renderVideoPlayList(videoPlayList) {
    let titlePlayListsElement = document.createElement('h2');
    titlePlayListsElement.append(titlePlayLists.title1);
    document.body.append(titlePlayListsElement);

    renderVideoTrack(videoPlayList.videoTracks[0]);
    renderVideoTrack(videoPlayList.videoTracks[1]);
    // renderVideoTrack(videoPlayList.videoTracks[2]);
}

function renderVideoTrack(videoTrackForRendering) {
    let videoTrackElement = document.createElement('div');


    let videoPlayerElement = document.createElement('video');
    videoPlayerElement.src = videoTrackForRendering.fileUrl;
    videoPlayerElement.controls = true;
    videoPlayerElement.width = '352';
    videoPlayerElement.height = '252';
    videoTrackElement.append(videoPlayerElement);

    let videoDescription = document.createElement('p');
    videoDescription.append(videoTrackForRendering.description);
    videoTrackElement.append(videoDescription);



    document.body.append(videoTrackElement);
}


