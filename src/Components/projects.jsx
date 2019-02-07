import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state= {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Task List</CardTitle>
                    <CardText>
                        Task list developed in React. Features include; Bootstrap, GraphQL. 
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Budget App</CardTitle>
                    <CardText>
                        Budget App developed in React. Designed to help manage spending habits.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>Profile Page</CardTitle>
                    <CardText>
                        Profile Page developed in React.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>
            )
        }

        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{Color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91vyd9vh28Afor4KmdxoFArpT8TukIzSnw5F_WSRhHF3tPXPM) center / cover'}}>ATM Project</CardTitle>
                        <CardText>
                            ATM Project Developed in Java. Features include the front end developed in Java and back end developed in SQL.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>               
            )
        }

        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Password Breaker</CardTitle>
                    <CardText>
                        Password Breaker for use of Perplexity Escape Games. GUI programmed in C#.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Budgeter Software</CardTitle>
                    <CardText>
                        Budgeting software to help manage personal expenses and revenue. GUI Developed in C#. 
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            </div>             
            )
        }

        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '176px', background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABxVBMVEX///+XwD1mZmZ/f3/8/PySvTGVwDrKyMzK2qZZV12bsmlhYWGawz2Wp3ZXV1b4+Pju7u6np6fX19evr6+prKNqampSUVSsxHx+mEaOjo5UV07Pz8/o6Ojd6cRzgFiRvi6wuch6enpoZF/I1q+amppcYGRkcILq7PC/v7/A1/Nxbmrg4OB7lz9pYVbA2JB9hpH4+vGfn5+WuExQYkPl7fuhud95gWiAmLfx9//Q3/FycnTd4+1ISElfaniOk5pvcnpicULDztt4jZ2gqruWrMTw/v/GzuF9lLTM1OCEkbfO6fqCpbiwsrpoXk6Tscm4z+9TTEGIhpx2gp3K4efB1Pa0vtXc2NN3f4i2xceCocOOnKmmrLKJmLKXj4KGe2+krsPe3/RrWD6mtVSowTvR9+Dh5tRuf0aaqIfF2XyjxlmvxITR28KInFd4mWtiZlHs8tdwinqasH16fnGkxWLW+sOFwlywuaHb+e2o13anzK/L5ZG84dWo4pyQtFqZyFXS887J3Z+Du5Xq6cyu3aSp2ly15LSXqZSZuoiv1GyyxLWt0oKuu5RUZWBdf3FATUR4pWRejGS9zZSVxHuDo3yRxXfFy6tRclDs8GipAAAQhklEQVR4nO2djXvTNh7HY8d2Sp3aiU3C3KQ0cQNJmpU2kNG80a4D2q7Ase1g5dpu7K7rRmhhx7INbqyFHeOtbOPYbvt7Ty9OYjt2YsBNHU7f54EnjWRJH+mnV0uKz0dERERERERERERERERERERE9IaKYUSRmRr43Ll/oNsjX+1lmlwVI4ZCIfE+tTvl1D944OyD9R/2NlkuSgzFc1LuJ7Z23xEiA/3nBqjRviFkxLgUywQ2dtide468h3Kx2GZ9lLq950lzSQxIcUaWAw+C6w+6JxoBZr6rU8GHTA8S54oAYUDOh+XNJxT1oLtvMReTwz+us7u3+4dQjMfkfCqc2bzD7ox09yxlwr/X2e27Yt8QgpYGJDoFEMco9s5ZB34P7lDB+yGxN6lzQ8jwUkpKfrrLjt7HX8EuUiyKU1MbGxtTU4zR64/r3LV/91ERwoIBNTGVyst36+zoPdTdxTc2H+7eqVFUkOUoqrZzbOCbr6YYaNCZ/LN1tn431E+AsH1s2Wn9NqB7UKfYUZZlOYBHcRwL/6J++v7e5ibwt81SY+m+KsJmY5MKP92lqGsv6kGMZhQHMKmdQ7cOUdzuRp8Boh4jA6ti+AosMbYdr0HJcUEA/zDdb4C4EFOKcmvQjs2g3ZE+JAxJcurR4E7QESG142wI6x0xqDV9XLO1zjZrpZ50Gxt4SXCyIAWe1u2rnwUiu/6gb4oRj6X/2GGd8yHG0WuOp8z7K2Shq4+CLwkI1H0U6wnBoXRA/p1qWCgXDFr0hToFgYfG59qI5y2VQXOFg9ebgMHjg4PblD0iR21vDR5vtLhc8GGXkfq+C0+GnjeRRgdPqMM3t47bIXLHD9/kh09sNdzZnU1v94wY8FYLoP41H61Wq0O2ZTgUgR5uNvsVjvL0ihsacef/ud4sseCQ4ocI4zaFyNU/UZIRoVrdan7F1r/Zbwx74SmF8q2uFf1OzitlocrX7QjB6NVPR6vvtr5jd7zb2sBuIqw8XtchjIHpn5+PqjZlyNY/BhNJkAVf6L/tvrizT0KjbeVLQ99wbQN8FYketuQDZVjbyMEsGN7WjV+5da/2/NBGU7P/MIy1gwPSeaV80rYtpXY3A2H/+JbhO+6YN9tTOCUM+2+YCgnMcIcGj9vxAdWvPxvapgzZwlGeHNtgG1W2TaWFly06EEK3oMkDu+vFfh8WYb48tNMBxrkcvQ7osXARlp87nPF2Efu993oMRsxlUsmft10idPpirodiQhLoFm64Y6SggfLe2A0Yadgf2XKnCAHiwH4DmYWMtMy7Rsge85qZAiPNKJGb2y8/sbch3PXa61LUkvKHnS+udSOse60MUTU8chiuYbsi1nPTRETI3xx0RYcOHTvmuRVi3N/TB1zQkbIix+Kee10KVy/yit8VKeGM5L0XwmgRWA67IjkTy3nkfSnTSgZcBpZiAXck5dKiLpL9gcWv5Tc+HxnBu9HQviZpY8A93W5EEwrdvjcw8k1v21YGAsXv3gmyQNQdkBhRBIDSAHyR7Y5GR/B+t3gORAODDf7Qw9YVvVuK/auG3y1x7Pr3Z1E9zIy51eGDLn8EW/6V3XU8TgLR9GzSiN8tPas1R2gc9QB8I+dTz9walkJC9AIk81trgcDZNjmXAAPyo5p+CFp7CDoLf/KWm4Ro+fyxfgWHrcd70urAEpRTgwYYtr4JO/whNwnh8vkjw7IPx471opvEyxWf1E2ziBeynxZcJcxlwsrvxhk1+6QXrQ2cJ6WS5iXeICDk3SWUZCW5ZVyF44K9WGZERUh/YWLhDh10mXAskE+qb5kCZO/vPSCczOeTBw7vPSGYUQ+bCUd7UIZwWTRVFnpACCxlnwjhckW0F4R+nhASQkJoRygTQkLoeUJSDwkhIdx/QlIP+5+QlCEhJIT7T0jqISH0PiGxUkLofUJipYTQ+4TESgkhIdx/QlIP3whC4cb+EPbkLTe20nfNhNf3glAw74zvZT007eh2fy+GFSFX68H+PY1weMu4DaT2R9h9Qrp6uGb4crQXZxS0nQrVL4wH6l7EXCeEGSls6b/javd6sOuLEXMBAFMdfq5D5NA5SbcJYUae2NYBUg+merGvDe0YigjVX5+3UlPbzLlfhjDEaPXP5m0EweBvvdnfjs4Z+mmAuEWhHbRc8PFm3H1CuOurDBBPPA/iPbU7LzZ6s/sbXSqQStICiHzrt3q9tvs4Fg/F3ScEmQYQhWr0l+d3njz57+OnUrxHl0nhG8j85QjPH+DppCIHciFxDwjhLlbFH6F54cCRiD8Fz2D0ak87A0osE06h0xVKXo4BwL0gRPtY4RmOpF9JhTPAUHpHiLZ5o9MVspyRACCzF4RM4wxHHp7AACbawwvPGHy6IhaIxaQcytq9INROOMQCKBoQS0/PXaBzAlAhHPOeEKKc1KLpZQFqiOhICYgX5+zeEGoHV1rR7KP2itA7IoSEsC8I4YT1hovnnjx2MwYipPV3Ib2mPHeBC7zpUqGrJ751zUyDHjvLra1t/GpeG3tlcV67JrKxtnHSvbtN9ruLNwkPvelo9ettKti4NcCiZPTq4Ep58F5hdAtWEs5Xh7aPa6q1MRzXy9a1Xh/bSHvutDo+s5eM8EL0569PQt08ect8ZdT2yZZunnzb5Bwcwi5fHuzlZNe58LlLJVkulyNwXh6tVr80HVEMvjUeQaL5A9Vq9W1TlQ0ejkTK5SSczee8d+FA43AwvMNbAfLDNaQ/zQiDyA06R4TqsJmQHVIUeI87vG/Ag0XYnPkj4csST7S/vcGucgogthM+g44BMJv3JqB2SD+Xk4DQZYkWhB9LSOiqxDbC0THglENrBt4E9DXmq6EQrJKg/28jPDYVQsplwkm+nXAkFMKz3f3m6Cz0w0ZwhFO2IkSueCJiQcjs/1TeofAIx4oQOeOJiAXhPif7ZfTmE4qEkBB6XoSw/wlxW9q2I+XNIWT+DwjRmOZNJ7TYN/XGEb7BLc2rEXptDbiT7Pag3tcTCqb7g9g7XruTtYO0tvSm8S4pjtJeRWDCqOlWZc6DF1zbSlsfHjbuLGTrXzWcJfiS4+RxYxn3Ys+aW8I3LQnVP/V3kXHUmIagGXH0hv42evaOV38QwVJ4Fh+t3qg1i4lb3w01CfErAOG54T49Dy4g2ktEXT5g+M/OKIZg2R9yjRU0vIyBNv+ta1cvju489MiNpQ4Ff00WMVQPH6JGWY7l6mO6a2XRr9HAzX/VX77F12fubnpxlbuD8C/qwH130ej4s1vXn32X0S/Uazvj4CuA6C+3bj378WDAK5fOOhb+VSTFX47QNF1u23aHEZUkdC4n8b3BfUaIEeU8WsNPyRkpbiwjJtR0huv4fQiIEOGdrTKQxbY7puWc8ex7im7C++6kxuY+EwLTcJa0vX/9KLTvLhQPhay33WFn7NqfgFAM1is6ExERERERERERERERvRliCkvSdKBS2KPpTzFbSSxMS5XCnoTOFCuLcH6uCW+4qxhQ0pc/VAVhQhBU5XLa4FKCG/QaD+XmS+bNooVK7EpOamm+0r4YzFTOzA4L6gQMf2G+qHcSF2HwIextUReO9NdSuugsu5lK4iOQerMSuqeLgUlVpbEEdTmhT+M7HwDPPN94TJ08vWhAKB0VeEPAR1bNjJXzsxO8Fjw9wc/o3dOnwCPVAPp89pQxieMfJSoOGMXEMt9IvU68jrCyovJ6JzVc0RFeMD2ozq7qnH2lZbXNgyGLfJX3DMHTwL0Vd/ooeDwaw4Szqikk3pjbliocpA3BWxAWJgWz42SpRTjR9ii/LHUgBB4iGX0ptQcfyRgJBWtC6JUOd6m5hWXVElBPOIMZVJXn+QkchzDTrCzmMkQPJ1uIFoQ0P55oPr/k57V8wUKf1YRDQuB1uZXbVkoJ2NsRvXg9IXMeBasK783FK4tnZjXc003CYcOjuELxyXiLkDd4QDnKl+c157MzOAW8kpFAgzRTxs/zWSvCo4agtKZBSHXgY1Zx8LNzpWIBqAj/L14s6wlLKE71w3n8d/GqgJI40UgCerCA/y8U01eTOMhmzjJNR6zLKLyJNa0QE7zRLtMa8aeFdkJfwaD5BWx/wqr9r15fjCBTThjaZ5+Y5FuExRkEJLfqfiiJkCdtwiyujCN3uWjnASLyftwafYZslFfiLfcMygJ+1YLQrJKCECPz1s4gS1DqI1dNaTEQVpbhH0pa5z6P8mXc1vwzyH120c4dtU0qShVzFRVYWdcy+UJ59Ly/2J3QV5mElsrP2LU287MQ8Lw5sw2EiQhMwZzenTmtNpNoJSaPCtGccU0VkGmhDCjMoLoUNjT5IVQy5UUHhL4c8jtrk5biaUOFsSQsQhp+xpjYxVm+ZUYWmocVWV2xNdMjTcIKamiTksFdlGEh0quMA0JsMOZ61oxpBSW0bVRgIIR+6Dmjh/R7aoeKqNVddbli45yFViqgbJ9D7X8qbfQQQ03diiPCEqzI6oq1mRZTwDEy1/a9nlCEfsazJg8y35HQBwtePWVDWJxsGfkcrCd03uQDmSmfd0SIIPiUdRmGoGM52/a9njBkRchgQvshocR3IMygWnoUuUqo3TQTMinnhD5kiKmQpZtl6n1uEOZ0hIXFmE6BlSOov9PaIesylPy0O4TIAiPtjXpXK+1KmNERgrmFXriT5mdw1cOESs70eMR5PUQ9Hp+yHn8XUCty3n1C3NLMaoST7YNJNTnX6G2hYzljeBy3pbyzthQNe21bmlUY0GSb42tbaQn3FulWEkxaXtSetewPc9BIHfaHTAIF2Nana1qE9TySMKf0dcuwuIraEq2PKi1PqA01CK82vaIxDV2WdYiiTDse04BBjW500K4CapVN/e1rExavGkZtpY9mT2HNnlK1mYfSbBg+Q+VFR+RW7LgPdzQu9YlhPKy1nSMmYK6axmSvS1jEdsM3qgZTTItpTZUz43jm0BrvnMGzw0he6/UlBc3I+U9LDggLK9gsEnaAvrNoeshPTFYKxdZGgpcjZPQSS5eXcW/gt+4Ncbujs5uzCp7h87QSjudSfjwFpocv+iwIDXEVC5dp9KyQsp89+bJoJkSr/JEk3tCUfQlC/Mc7nygtJRu9QcRs+s1n8bB8rWlXS+PaIgMP5r10Y77fbF31hMyKYhVXsuMkP+1vhI97q1cg/EDX2zUTm7DNVjwsn2wVcSVpXkfh6Va1NMzxDWttjbj86bY4DMpN8roIxs2EnXoLjbBtJYoW/An7CM/CusPrWz9jEkDIkfOtprXbShQ/mTPHYFZldba1GNVG2L0emgl5GGmnVcx3UE28rPNiSAKvTs7pV+I6EZpXLm1UXDzth+vNSIhwHH5qlGHjW51E+cLExIVljfDvE3oJkZVEZ7MpQG8XDL2wuHg6iZMg0DPGNfX0KRDXBxph5II+KlXwn160m4SaUpyG7wzWFtbOnYOVVjyztjA9jVeexMTCwtq0qSozc8B9+i/4j4vTa2vvr52bfh98BT4uVrpuzJs+N702beqjxfQ8SMLCmXnz4+m/gWAXcEEx4PPa9AJMHYzySvYlbgxhCpeypUuXlpZgljDZ7KVsVmvsCtlLpaw5o4DvbHap4QF6X4KPZLOlrINVdugx29ZHMyCgS6W2IhGh50tF3ZOXSiAq8G/J4VsLIiIiIiIiIiIiIiKiV9H/AGeQNv03RG2HAAAAAElFTkSuQmCC) center / cover'}}>Goal Tracker</CardTitle>
                    <CardText>
                        Goal tracker developed to keep track of your personal goals. Developed in Android Studio and uses basic Java as programming language.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>                
            )
        }
    }

    render(){
        return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
                <Tab>WebDev</Tab>
                <Tab>Java</Tab>
                <Tab>C#</Tab>
                <Tab>Mobile</Tab>
            </Tabs>

            
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>                
                    </Cell>
                </Grid>
            

        </div>
        )
    }

}

export default Projects;