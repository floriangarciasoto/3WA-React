import { Link } from "react-router-dom";

const NotFoundPage = () => {

    return <div className={'page'}>
        <h1>Vous vous êtes perdu, c'est dangereux !</h1>
        <h4>Heureusement, vous pouvez rentrer à la <Link to={'/'}>maison ici</Link></h4>
        <img style={{ height: '25em' }} src="https://cdn.discordapp.com/attachments/1233431917538578463/1233431932553920572/image.png?ex=662d1280&is=662bc100&hm=9c101a82d48e606a8920cf6101d60f5092f1e7a11c9655f50754bf5cba4b3712&" />
    </div>
}

export default NotFoundPage