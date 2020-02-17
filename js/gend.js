var chart_07009fc2d9e7464db83779c9412d6b70 = echarts.init(
            document.getElementById('07009fc2d9e7464db83779c9412d6b70'), 'white', {renderer: 'canvas'});
        var option_07009fc2d9e7464db83779c9412d6b70 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "cornflowerblue",
        "salmon"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\ub0a8",
                    "value": 16
                },
                {
                    "name": "\uc5ec",
                    "value": 14
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "color": [
                    "black"
                ],
                "margin": 8,
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\ub0a8",
                "\uc5ec"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    "title": [
        {
            "text": "\uc131\ubcc4(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_07009fc2d9e7464db83779c9412d6b70.setOption(option_07009fc2d9e7464db83779c9412d6b70);
