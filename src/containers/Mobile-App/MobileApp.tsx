import { useInView } from 'react-intersection-observer'
import { Inner, OverFlowHidden } from '../../styles'
import * as M from './styles'
import AppStore from '../../media/app_app-store.svg'
import AppStoreWhite from '../../media/app_app-store-white.svg'
import GooglePay from '../../media/app_google-play.svg'
import GooglePayWhite from '../../media/app_google-play-white.svg'
import phoneIcon from '../../media/app_phone.png'
import Button from '../../components/Button'

const MobileApp = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <M.Wrapper id='Mobile-App' ref={ref}>
            <Inner>
                <M.Columns>
                    <M.Column1>
                        <OverFlowHidden><M.H2 inView={inView}>Download</M.H2></OverFlowHidden>
                        <OverFlowHidden><M.H2 inView={inView}>investment</M.H2></OverFlowHidden>
                        <OverFlowHidden><M.H2 inView={inView}>mobile app</M.H2></OverFlowHidden>

                        <M.Links inView={inView}>
                            <M.Button>
                                <M.HoverBackground />
                                <M.TextWrapper>
                                    <M.Text>
                                        <img src={AppStore} alt="" />
                                    </M.Text>
                                    <M.Text>
                                        <img src={AppStoreWhite} alt="" />
                                    </M.Text>
                                </M.TextWrapper>
                            </M.Button>

                            <M.Button>
                                <M.HoverBackground />
                                <M.TextWrapper>
                                    <M.Text>
                                        <img src={GooglePay} alt="" />
                                    </M.Text>
                                    <M.Text>
                                        <img src={GooglePayWhite} alt="" />
                                    </M.Text>
                                </M.TextWrapper>
                            </M.Button>
                        </M.Links>
                    </M.Column1>

                    <M.Column2 inView={inView}>
                        <M.PhoneBg >
                            <M.Phone>
                                <img src={phoneIcon} alt="" />
                                <M.PhoneLine />
                            </M.Phone>
                        </M.PhoneBg>
                    </M.Column2>

                    <M.Column3 inView={inView}>
                        <h3>get in touch</h3>
                        <M.Form action="/">
                            <M.Input type="text" placeholder='your name' required/>
                            <M.Input type="text" placeholder='your email' required/>
                            <Button
                                width='170px'
                                backgroundColor='#222b40'
                                minHeight='54px'
                                textDistance='30px'
                                transformValue='translateY(-150%)'
                            >
                                Submit
                            </Button>
                        </M.Form>
                    </M.Column3>
                </M.Columns>
            </Inner>
        </M.Wrapper>
    )
}

export default MobileApp