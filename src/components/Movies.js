import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Consigliati</h4>
            <SectionMovie>
                <Wrap>
                    <img src="https://www.cinematographe.it/wp-content/uploads/2019/04/avengers-endgame-poster-og-social-crop.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.ehabitat.it/wp-content/uploads/2020/12/soul-nuovo-film-disney-1.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="http://www.officinema.it/wp-content/uploads/bianco-come-il-nero-orizzontale-1864x1048.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://staticr1.blastingcdn.com/media/photogallery/2020/4/20/660x290/b_502x220/earth-un-giorno-straordinario-il-film-documentario-martedi-21-aprile-in-tv-su-rai-2-e-in-streaming-online-su-raiplay-comingsoonit_2444943.jpg" />
                </Wrap>
            </SectionMovie>

            <h4>Disney</h4>
            <SectionMovie>
                <Wrap>
                    <img src="https://www.cinematographe.it/wp-content/uploads/2019/04/avengers-endgame-poster-og-social-crop.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.ehabitat.it/wp-content/uploads/2020/12/soul-nuovo-film-disney-1.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="http://www.officinema.it/wp-content/uploads/bianco-come-il-nero-orizzontale-1864x1048.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://staticr1.blastingcdn.com/media/photogallery/2020/4/20/660x290/b_502x220/earth-un-giorno-straordinario-il-film-documentario-martedi-21-aprile-in-tv-su-rai-2-e-in-streaming-online-su-raiplay-comingsoonit_2444943.jpg" />
                </Wrap>
            </SectionMovie>

            <h4>Marvel</h4>
            <SectionMovie>
                <Wrap>
                    <img src="https://www.cinematographe.it/wp-content/uploads/2019/04/avengers-endgame-poster-og-social-crop.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.ehabitat.it/wp-content/uploads/2020/12/soul-nuovo-film-disney-1.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="http://www.officinema.it/wp-content/uploads/bianco-come-il-nero-orizzontale-1864x1048.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://staticr1.blastingcdn.com/media/photogallery/2020/4/20/660x290/b_502x220/earth-un-giorno-straordinario-il-film-documentario-martedi-21-aprile-in-tv-su-rai-2-e-in-streaming-online-su-raiplay-comingsoonit_2444943.jpg" />
                </Wrap>
            </SectionMovie>
        </Container>
    )
}

export default Movies

const Container = styled.div `

`

const SectionMovie = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div `

    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        height: 100%;
        width: 100%
    }

    &:hover {
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.5);
    }
`