function sum(a, b) {
    return a + b;
}

function getComponentCount($container) {
    var components = $container.find('.component');
    if (components) {
        return components.length;
    } else {
        return 0;
    }
}

function addSomeTestIntoComponent($component, text) {
    if ($component.length == 1) {
        $component.text(text);
    } else {
        throw new Error('component is null');
    }
}
