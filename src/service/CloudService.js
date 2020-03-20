function uploadImg(ev) {
    console.log('ffgtefh', ev)
    const CLOUD_NAME = 'dluh6gkat'
    const PRESET_NAME = 'zzlohxge'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', PRESET_NAME);
    return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => console.error(err))
}

export default {
    uploadImg
} 