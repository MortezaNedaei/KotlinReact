import kotlinx.css.*
import styled.StyleSheet

object WelcomeStyles : StyleSheet("WelcomeStyles", isStatic = true) {
    val textContainer by css {
        flex(0.5)
        width = 100.px
        padding(5.px)
        backgroundColor = rgb(8, 97, 22)
        color = rgb(56, 246, 137)
        borderRadius = 8.px
        textAlign = TextAlign.center
    }

    val textInput by css {
        margin(vertical = 5.px)
        borderRadius = 8.px
        borderWidth = 0.5.px
        borderColor = rgb(240, 240, 240)
        fontSize = 14.px

    }
} 
