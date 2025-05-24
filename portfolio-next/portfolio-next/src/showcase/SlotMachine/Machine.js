class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && (s2 == s3);
        const imgWin = "https://media.tenor.com/j9OCK4cSiPYAAAAC/winner-trophy.gif";
        const imgLost = "https://thumbs.gfycat.com/MindlessCompleteDunnart-size_restricted.gif";

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? 'Winner !' : 'Loser'}</p>
                <img src={winner ? imgWin : imgLost}/>
            </div>
        )
    }
}