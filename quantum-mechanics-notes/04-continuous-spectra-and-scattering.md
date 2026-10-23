# Continuous Spectra and Scattering

It is once again brought to the attention that we are currently concerned and dealing only and only with a single non-relativistic particle moving in one spatial dimension.

## Dirac Delta Function ($\delta(x)$)

The following introduction of Dirac delta function follows Dirac [1].

### Definition

_Dirac delta function_, denoted by $\delta(x)$ is a quantity depending on a parameter $x$ satisfying the conditions

$$
\int_{-\infty}^{\infty} \delta(x) dx = 1
$$

and

$$
\delta(x) = 0, x \neq 0
$$

It is not an ordinary function in the usual mathematical sense, but a distribution (or generalized function).
For further background, see [Distribution (mathematical analysis) - Wikipedia](<https://en.wikipedia.org/wiki/Distribution_(mathematical_analysis)>) [2].

### Properties of $\delta(x)$

The most important property of $\delta(x)$ is given by

$$
\int_{-\infty}^{\infty} f(x) \delta(x) dx = f(0)
$$

From this, one can obtain the property known as _sifting property_

$$
\int_{-\infty}^{\infty} f(x) \delta(x-a) dx = f(a)
$$

The above relation describes the action of the delta distribution on a suitable function $f$ in modern mathematical analysis.

It also has the following integral representation

$$
\delta(x-a) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ik(x-a)}dx
$$

## Dirac Delta Potential

Consider a potential $V(x)$ defined by

$$
V(x) = \alpha \delta(x)
$$

This potential is referred to as _Dirac delta potential_, and $\alpha$ is referred as the _strength of the potential_.

Using the time-independent Schrödinger equation, we obtain

$$
\frac{-\hbar^2}{2m} \frac{d^2 \psi}{dx^2} + \alpha \delta(x) \psi = E \psi
$$

On integrating the above equation around $x = 0$, we get

$$
\frac{-\hbar^2}{2m} \int_{-\varepsilon}^{\varepsilon} \frac{d^2 \psi}{dx^2} dx + \int_{-\varepsilon}^{\varepsilon} \alpha \delta(x) \psi(x) dx = E \int_{-\varepsilon}^{\varepsilon} \psi(x) dx
$$

Taking limit $\varepsilon \to 0$, we have the right hand side going to zero as eigenfunction must be finite. Thus after simplifying and using the property of Dirac delta function, we get the derivative-jump condition, which we call jump condition as

$$
\Delta \frac{d\psi}{dx} = \frac{2m\alpha}{\hbar^2} \psi(0)
$$

The continuity of $\psi(x)$ can be motivated by a proof by contradiction. If $\psi(x)$ had a finite jump at $x=0$, its second derivative would contain a term proportional to $\delta'(x)$, which does not appear in the Schrödinger equation for the case of Dirac delta potential.

Also, from the jump condition if $\psi(0) \neq 0$, then $\psi'$ is discontinuous at $0$, otherwise it will be continuous. These results can be rigorously derived from the formal mathematical framework of quaantum mechanics we talk about in detail later.

## Free Particle in Quantum Mechanics

A free particle refers to a particle with $V(x) = 0$.

Using the time-independent Schrödinger equation, we obtain

$$
\frac{-\hbar^2}{2m} \frac{d^2 \psi}{dx^2} = E \psi
$$

Note that $E > 0$, otherwise the equation will not yield any nonzero physical bound state and a zero function cannot represent a quantum state. Therefore, for free particle, no negative-energy states are allowed.

The general solution of this is given by

$$
\psi(x) = Ae^{ikx} + Be^{-ikx}
$$

where

$$
k = \sqrt{\frac{2mE}{\hbar^2}}
$$

Here, we don't have any boundary conditions to impose. They also aren't normalizable. Thus, we move on to interpreting it in different ways than earlier.

With the time-dependent factor, the solutions will be given by

$$
\Psi(x, t) = \psi(x) \phi(t)
$$

where $\phi(t) = e^{-iEt/\hbar}$.

The solutions could thus be generalized as

$$
\Psi(x, t) = Ae^{ik (x - vt)} + Be^{-ik (x + vt)}
$$

where $v = \hbar k / 2m$.

The first term could be interpretated as a wave moving along +ve x-axis and the second as a wave along -ve x-axis.

We can also interpret the solutions as

$$
\Psi(x, t) = Ae^{i(kx - \omega t)} + Be^{-i (kx + \omega t)}
$$

where $\omega = \hbar k^2/2m$.

Observe that both $v$ and $\omega$ are functions of $k$.

### Momentum

We know

$$
p = -i \hbar \frac{\partial}{\partial x}
$$

Consider $k > 0$.
Therefore, if $\psi_{\pm k}(x) = Ae^{ik(x \mp \frac{\hbar k}{2m} t)}$

$$
p \psi_{\pm k} = \pm \hbar k \psi_{\pm k} (x)
$$

and therefore,

$$
\boxed{p = \pm \hbar k}
$$

Now, since $\hat{V} = 0$, we have

$$
\hat{H} = - \frac{\hbar^2}{2m} \frac{d^2}{dx^2} = \frac{\hat{p}^2}{2m}
$$

Now consider the below commutator

$$
\left[\hat{H}, \hat{p} \right] = \left[ \frac{\hat{p}^2}{2m}, \hat{p}\right] = 0
$$

Thus, $\hat{H}$ and $\hat{p}$ commute.

### Speed of the Wave

From the above interpretation, we can determine the speed of the wave quantum mechanically as

$$
v_q = \frac{\omega}{k} = \frac{\hbar k}{2m} =  \sqrt{\frac{E}{2m}}
$$

Now, observe that classically, we will obtain

$$
v_c = \sqrt{\frac{2E}{m}}
$$

Thus, we obtain $v_q \neq v_c$ and an unique relation $v_c = 2 v_q$ stating that the quantum mechanical function travels at half the speed of the particle itt is supposed to represent.

### Normalizing solutions for free particle

The solutions $\psi_k$'s are not normalizable. Also, the integral over the space of the product of two different solutions of the equation does not converge to a specific limit. This issue had to resolved along with the paradox of obtaining different speeds by the quantum mechanical and classical approach.

This led to the treatment of solutions over a continuous variable $k$ instead of summing over discrete indices which is represented as follows

$$
\Psi(x, t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \Phi(k) e^{i (kx - \frac{\hbar k^2}{2m} t)} dx
$$

Consider the initial state normalized at $t = 0$ is given such that

$$
\psi(x, 0) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \Phi(k) e^{ikx} dk
$$

We aim to look at the state at time $t$ and thus need to recover $\Phi(k)$. For this, multiply both sides by $e^{-ikx}$, and integrating both sides over the entire space, we get

$$
\int_{-\infty}^{\infty} \Psi(x, 0) e^{-ikx} dx = \frac{1}{\sqrt{2\pi}} \Phi(k') \left[\int_{-\infty}^{\infty} e^{i(k' - k)x} dx \right] dk'
$$

Note that the integration variable $k'$ is used instead of $k$ for convenience.

Using the Fourier identity, property of Dirac delta function, and simplifying, we obtain

$$
\Phi(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \Psi(x, 0) e^{-ikx} dx
$$

This is the Fourier transform of $\Psi(x, 0)$. From properties of Fourier transform, we can conclude $\Phi(k)$ is also normalized in the $k$-space. We call it as a wave packet since it carries a range of k's. For details about Fourier transform, visit [Fourier transform - Wikipedia](https://en.wikipedia.org/wiki/Fourier_transform).

With this, we now impose delta-function normalization such that

$$
\int_{-\infty}^{\infty} \psi^{\ast}_{k'}(x) \psi_{k}(x) dx = \delta(k - k')
$$

and substitute $\psi_k(x) = Ae^{ikx}$.

Thus, we get

$$
A = \frac{1}{\sqrt{2\pi}}
$$

and therefore

$$
\psi_k = \frac{1}{\sqrt{2\pi}}e^{ikx}
$$

### Addressing the speed paradox

The paradox was resolved as soon as we discovered that $\psi_k$ is not a physically normalizable state. To understand how information about the particle's velocity is carried by the wavefunction, the idea is to start looking at wave packets.

A wave packet is formed by superposing sinusoidal waves of different wave numbers, producing rapid oscillations or “ripples” within a broader envelope. The function $\Phi(k)$ specifies the amplitudes of the constituent wave-number components. For a free particle, the velocity of the wave packet's envelope is described by the _group velocity_,

$$
v_{group} = \frac{d\omega}{dk}
$$

The individual sinusoidal oscillations within the wave packet propagate at the _phase velocity_, given by

$$
v_{phase} = \omega/k
$$

From these, one could easily obtain for a free particle that

$$
v_{group} = 2v_{phase}
$$

In this case, the group velocity equals the particle's velocity, whereas the phase velocity is half the particle's velocity. Thus, the envelope travels at the particle's velocity, while the individual oscillations propagate at half that speed See [4] for further reading.

## Bound and Scattering States

_Bound states_ are defined as the states in which particle's energy is lower than the potential at both sides.

Formally, this means a bound state is a state with energy $E$ such that

$$
E < V(-\infty) \text{ and } V(\infty)
$$

_Scattering states_ are defined as the states in which the particle's energy is higher than the potential at either of the sides.

Formally, this means a scattering state is a state with energy $E$ such that

$$
E > V(-\infty) \text{ or } V(\infty)
$$

It could be understood from the example of the delta potential problem in which we had $V(-\infty) = V(\infty) = 0$. In that case, $E < 0$ gives us bound states and a discrete normalizable solution whereas $E > 0$ gives scattering states fomring a continuum which is not normalizable in the ordinary sense but physical states can instead be formed from normalizable wave packets. This could be seen in the following section.

## Dirac Delta Potential Well

For the Dirac delta potential well, let's consider the Dirac delta potential given by

$$
V(x) = -\alpha \delta(x)
$$

where $\alpha > 0$.

Now, consider the regions further from $x = 0$. We will have

$$
\frac{-\hbar^2}{2m} \frac{d^2 \psi}{dx^2} = E \psi
$$

From here, the solution will be depend upon two possibilities

#### (I) $E < 0$

The solution in this case will be given by

$$
\psi = Ae^{kx} + Be^{-kx}
$$

where

$$
k = \sqrt{\frac{-2mE}{\hbar^2}}
$$

Let's consider two regions, region I for $x \leq 0$ and region II for $x \geq 0$ and represent their wavefunctions respectively as $\psi_I(x)$ and $\psi_{II}(x)$.

Now, these wavefunctions must satisfy the following boundary conditions along with the finite jump condition obtained earlier in [Dirac Delta Potential](#dirac-delta-potential).

$$
\psi_I(x) \to 0 \text{ as } x \to -\infty
$$

$$
\psi_{II}(x) \to 0 \text{ as } x \to \infty.
$$

$$
\psi_I(0) = \psi_{II}(0)
$$

The first two conditions are imposed because if this were not the case, one of the terms will blow up and that would physically mean that probability of finding particle at edge of the universe is infinitely more likely than near the origin which contradicts the fact that the particle does not have the energy to freely exist out there as $E < 0$. The third condition is imposed because of the continuity of the wavefunction. All these conditions could be rigorously derived from the formal mathematical framework of quantum mechanics which we talk about in detail later.

From this, we obtain

$$
\psi_I(x) = Ae^{kx}
$$

$$
\psi_{II}(x) = Be^{-kx}
$$

Substituting these in the expression we had obtained earlier and simplifying, we get,

$$
k = \frac{m \alpha}{\hbar^2}
$$

Thus, we obtain a discrete energy eigenvalue

$$
E = \frac{m \alpha^2}{2 \hbar^2}
$$

On normalizing the eigenfunctions, we get

$$
\psi = \sqrt{\frac{m \alpha}{\hbar}} e^{-m\alpha |x| / \hbar^2}
$$

#### (II) $E > 0$

The solution in this case will be given by

$$
\psi = Ae^{ikx} + Be^{-ikx}
$$

where

$$
k = \sqrt{\frac{2mE}{\hbar^2}}
$$

Let's consider two regions, region I for $x \leq 0$ and region II for $x \geq 0$ and represent their wavefunctions respectively as $\psi_I(x)$ and $\psi_{II}(x)$.

For the problem, we choose the particle travelling along +ve x-axis. Thus, we have

$$
\psi_I(x) = Ae^{ikx} + Be^{ikx}
$$

$$
\psi_{II}(x) = Ce^{-ikx}
$$

as the particle could either get transmitted or reflected. The transmitted component retains its direction of motion.

Now, we impose the finite jump condition obtained earlier and continuity, that is, $\psi_I(0) = \psi_{II}(0)$. On solving, we obtain

$$
R = \frac{\beta^2}{1 + \beta^2}
$$

$$
T = \frac{1}{1 + \beta^2}
$$

where $\beta = m\alpha/\hbar^2 k$, and $R$ and $T$ are called _reflection coefficient_ and _transmission coefficient_ respectively.

Thus, the particle has nonzero probability of passing through the potential even if $E < V_{max}$. This phenomenon is referred to as _tunneling_.

## References

[1] P. A. M. Dirac, _The Principles of Quantum Mechanics_, 4th ed. Oxford: Clarendon Press, 1958.

[2] “Distribution (mathematical analysis),” _Wikipedia_. Available: https://en.wikipedia.org/wiki/Distribution_(mathematical_analysis)

[3] "Fourier Transform," _Wikipedia_. Available: https://en.wikipedia.org/wiki/Fourier_transform

[4] D. J. Griffiths and D. F. Schroeter, _Introduction to Quantum Mechanics_, 3rd ed. Cambridge, U.K.: Cambridge University Press, 2018.
