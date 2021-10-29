const colors = ['#999999', "#FF33FF", "#009966"]

export const getNextColor = (post) => {
    const index = colors.indexOf(post.color)
    if (index === colors.length - 1) {
        return colors[0]
    } else return colors[index + 1]
}